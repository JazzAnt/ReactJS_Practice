//in package.json, add a script to trigger it
//nodemon allows instant node updating (like react)
//"scripts": "start":"nodemon server.js"
//so if in cmd you type 'npm start' it will trigger 'nodemon server.js'

import express from "express";

//create an instance of express and save it in var
const app = express(); //this is your express app

// GET Request
//"/" is the route, here it's "localhost:3000/"
//         request, response
app.get("/", (req, res) => {
  //request has a lot of params, if you print it will clutter your console
  //look up how to fetch specific params e.g. req.rawHeaders

  //here is how you respond to the browser
  res.send("<h1>Hello World</h1>");
  //note that res.send is a one-time function,
  //you cannot call multiple res.send() in 1 request
});

app.get("/about", (req, res) => {
  //this time we reply with a JSON (static, but later we'll do a dynamic database fetch)
  res.json({
    fname: "Jason",
    lName: "Januar",
  });
});

//this is a post request channel
//for post, put and delete, usually respond with a status code
app.post("/", (req, res) => {
    res.send("Posted Successfully").sendStatus(201)
});
app.put("/", (req, res) => {
    res.send("Updated Successfully").sendStatus(201)
});

app.delete("/", (req, res) => {
    res.send("Deleted Successfully").sendStatus(201)
});

// as usual, PostPutDelete tested with Postman
// There is actually a VSC extension for it named Thunder Client (shown on left tab)
// used the same way as postman


const PORT = 3000;
//make it listen for any request to the port
app.listen(PORT, () => {
  //triggers on startup and restart
  console.log(`the server is up and listening to requests at port ${PORT}`);
});

/* PORT 3000 means you're running it in localhost:3000
 * it's the default location for node testing
 * say you type localhost:3000 then it will trigger the above get("/")
 */
