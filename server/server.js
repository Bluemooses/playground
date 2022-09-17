// Getting the module from node_modules.  
const express =  require('express');  

// Creating our Express Application.  
const app =  express();  

// Our middleware function.
const myMiddleware = (req, res, next) => {
    console.log(`Middleware has fired at time ${Date().now}`);
    next();
}

// Tell Express to use the middleware.
app.use(myMiddleware);

// Defining the port we’ll bind to.  
const PORT =  5000;  

// Defining a new endpoint behind the "/my-test-route" route. 
app.get('/my-test-route', () => { 
    console.log('A GET Request was made to /my-test-route.');  
});  

// Binding the server to port 3000. 
app.listen(PORT, () => { 
    console.log(`Server is up on port ${PORT}.`)  
});