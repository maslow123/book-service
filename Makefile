buildapi:
	docker-compose -f ./docker-compose.yaml build --no-cache api

runapi:
	docker-compose -f ./docker-compose.yaml up -d --force-recreate api