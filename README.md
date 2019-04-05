# JS401 - Lab-14 ACL
## Author: Cory Henderson
This lab contains an authentication router and standard router to implement user signup and signin.  A Mongo database is used to store user information, and signin is authenticated by either basic authorization or authorization by bearer. The key feature of this lab is adding role capabilities which restrict use to users based on their role. Test routes were implemented in new-routes.js to test various authorization levels for various roles.

## Links and Resources
- [Github Repo](https://github.com/401-advanced-javascript-1/lab-14-ACL/tree/submission)
- [Travis](https://www.travis-ci.com/401-advanced-javascript-1/lab-14-ACL)
- [Heroku](https://dry-tor-67749.herokuapp.com/)

## Documentation

# Modules
- index.js
- app.js
- middleware.js
- router.js
- new-router.js
- users-model.js
- roles-model.js
- 404.js, 500.js
- supergoose.js

# Setup
- .env requirements
  - MONGODB_URI=mongodb://localhost:27017/teams
  - PORT=3000 (for nodemon)
- Running the app:
  - Start mongo server: mongo
  - New user signup in CLI: echo '{"username":"Cory", "password":"things","role":"admin"}' | http post :3000/signup
  - User signin in CLI: echo '{"username":"Cory", "password":"things"}' | http post :3000/signin
  - User roles have been saved in the MongoDB. Rights are 

## Tests
- Testing for expected route endpoints is performed using jest.
