import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});
app.listen(5000, ()=> {
    console.log('Serve at http://localhost:5000');
});











/*
22. Continuation from product.js notes (no.9)
    1. Import express from express 
    2. Create an create an app from express i.e.
        const app = express();
    3. define the first route. The backend route will respond as "server is ready"
        Create a handler for the path "app.get" as indicated above i.e.
        handler accept request and response (req, res) and inside the body of handler,
        send back the message "Server is ready" using "res.send"
    4. To run the server, call the listen method of app i.e "app.listen" then define a port 
        i.e. app.listen(5000, ). The function will now run when you define the body of this function 
        i.e. console.log ('Server at http://localhost:5000')
    5.The code above creates a basic express server that shows "Server is ready" when you open it




*/