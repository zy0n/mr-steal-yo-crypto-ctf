slither $1 --exclude dead-code,naming-convention,external-function,low-level-calls,solc-version, --solc-remaps '@openzeppelin=/home/ethsec/data/node_modules/@openzeppelin' --exclude-dependencies  --checklist > $1_Audit.md
slither $1 --solc-remaps '@openzeppelin=/home/ethsec/data/node_modules/@openzeppelin' --checklist > $1_Audit-Full.md