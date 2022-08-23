## Tools that need to be installed
- [Docker](https://www.docker.com/)
- [Make](https://community.chocolatey.org/packages/make)

## How to run the application?
- Clone this repository
- Open your terminal / cmd, and type the command on below:
    ```
    make runapi
    ```
- Make sure the service is running properly, as follows:
    ```
    $ docker ps
    CONTAINER ID   IMAGE                           COMMAND                  CREATED          STATUS          PORTS                    NAMES
    6f3b0a9fa012   maslow123/books-api:latest      "docker-entrypoint.s…"   16 seconds ago   Up 15 seconds   0.0.0.0:8080->8080/tcp   book-service_api_1
    ```
- Finish
