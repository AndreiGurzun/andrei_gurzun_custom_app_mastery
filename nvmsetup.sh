# CYAN="\033[36m"
# NORMAL="\033[0;39m"
# YELLOW="\033[33m"

# echo $CYAN[INFO]$NORMAL Comparing package.json engine to ".nvmrc" value.
# packagevalue=$(node -p -e "require('./package.json').engines.node")
# packagevalueformatted=${packagevalue#v}
# if [[ $(echo $packagevalueformatted | diff .nvmrc -) ]]; then
# 	echo $packagevalueformatted > .nvmrc
# 	echo $YELLOW[WARN]$NORMAL ".npmrc" did not match package.json engine and has been updated. You will need to commit the change.
# fi
