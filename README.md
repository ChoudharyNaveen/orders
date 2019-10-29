# orders
1. Used nodejs/express framework as backend for ths orders application(NodeAppln folder name)
a. Mongoose driver is used for connectivity between express js and mongodb(mongoDb server was running on localhost:27017 and nodeJS at localhost:8083 ports)
b. index.js in router folder defines all the possibles http api/calls to perform CRUD opearion)
c. app.js is used to run the nodeJS at local host 8083 
d. Models folder has files which defines the data models for orders and users.
e. After login, jwt token will be generated with user details.
f. npm run dev command to start the nodeJS application 

2.Used angular materials and bootstrap modules in angular application
-- Defined 4 components:
a. login-app : used to display login html and to check whether used is authenticate or not.
b. signup-app : used to display singup html and to register the new user
c. form-modal-app : It is used to display add/edit form in popup.
d. orders-app : It is used to display orders tables and from this component we will open form-modal component to add/edit the orders.
-- orders-service.ts is the service used to perform CRUD operation calls to backends.All the http calls are done from this service.
-- In app.module.ts, need to import mat-button,mat-modal modules.
-- Routing between login, signup and orders is done in app.module.ts in app-routing service.
-- Front end part have to run localhost:4200
-- node_modules folder is removed, run npm install command to get all the dependencies.
-- npm serve to start the application 
