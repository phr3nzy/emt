# EMT
Express, MongoDB API built using TypeScript!

## Features
- Express Routing, Error Handling
- MongoDB CRUD
- Promise Based ;)
- TypeScript 

## Setup
First ensure you have the proper .env variables set which are:

	PORT
	HOST
	MONGO_URI
	SECRET # for JWT and stuff
  
Then run:

	yarn run dev # run development server
	yarn run build # compiles TS files
	yarn run start # launch nodemon and watch for changes in the dist folder
	yarn run prod # runs build & start commands
