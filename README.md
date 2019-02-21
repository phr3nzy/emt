# EMT
Express, MongoDB API built using TypeScript!

## Features
- Express Routing, Error Handling
- MongoDB CRUD
- Promise Based ;)
- TypeScript 

## Setup
Please, first ensure you have the proper .env variables set which include, but are not limited to:

	PORT
	HOST
	MONGO_URI
	SECRET #JWT and stuff :p
  
Then run:

	yarn run dev # launches a server for development
	yarn run build # compiles TS files
	yarn run start # launch nodemon and watch for changes in the dist folder
	yarn run prod # runs build & start commands
