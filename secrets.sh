# CYAN="\033[36m"
# NORMAL="\033[0;39m"
# PINK="\033[35m"
# YELLOW="\033[33m"

# if [[ -z  $(gcloud --version) ]]; then
# 	echo $YELLOW[WARN]$NORMAL gcloud CLI is not installed. See repository\'s README.md file for more information.
# 	return
# fi
# if [[ -z "$(gcloud auth list --filter=status:ACTIVE --format='value(account)')" ]]; then
# 	echo $YELLOW[WARN]$NORMAL Secrets were not fetched from GCP. See repository\'s README.md file for more information.
# 	return
# fi

# project=$1
# echo $CYAN[INFO]$NORMAL Fetching secrets from $project in GCP...

# getSecret() {
# 	secret=$(gcloud secrets versions access latest --secret=ELECTIONS_$1 --project=$project)
# 	if [[ -z $secret ]]; then
# 		echo $YELLOW[WARN]$NORMAL Secret ELECTIONS_$1 was not retrieved.
# 	else
# 		export $1=$secret
# 		echo $PINK[EVENT]$NORMAL Secret ELECTIONS_$1 was retrieved and set.
# 	fi
# }

# # Loop through all the secrets and set them as environment variables.
# for key in 'ENV_GANNETT_API_TOKEN'
# do
#    getSecret $key
# done
