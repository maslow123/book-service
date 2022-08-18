buildapi:
	docker-compose -f ./docker-compose.yaml build --no-cache api	
	docker-compose -f ./docker-compose.yaml push api

runapi:
	docker-compose pull api
	docker-compose -f ./docker-compose.yaml up -d --force-recreate api