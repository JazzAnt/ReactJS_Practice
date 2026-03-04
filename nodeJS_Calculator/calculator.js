//like react, public is where you store assets like html or images
import express from "express";
const app = express();

//set up middleware which will be used to handle html request and response
//can do stuff like auth auth and in this case parse response body
app.use(express.urlencoded({ extended: true }));

// we also need these to get our file location
// basically, __dirname now holds the relative path to our project root
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//for ejs
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

//send the index html with sendFile, which has a form for the post
app.get("/", (req, res) => {
  //use path.join to append the directory with your html file url
  //res.sendFile(path.join(__dirname, "/public/index.html"));
  res.render("index", {})
});

//this time, the post is received from a HTML form sent by index.html
//the form has the action "/" and the method "post" so it'll go here
app.post("/", (req, res) => {
  //req.body now contains a JS object containing key-value of form results
  //note that you need to have a middleware for this (see above)
  console.log(req.body);
  let { num1, num2 } = req.body;

  //keep in mind that form results are strings so convert them if needed
  let sum = parseInt(num1) + parseInt(num2);
  //res.send(sum);

  //here you'll update the index.html using EJS
  //in fullstack you'll use React but for now we'll use EJS just as an example
  /**
   * 1. create views folder (EJS files can only be there)
   * 2. make index.ejs (for now copy paste index.html) and add place to hold ejs value
   * 3. npm install ejs
   * 4. app.set("views", path.join(_dirname, "views"))
   * 5. app.set("view engine", "ejs") //set VE as EJS
   * 6. do res.render for this and pass sum as value (data is key, can be any)
   * 7. optionally change get to ejs too
   */
  res.render("index", {sum:sum})
});

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log("Calculator server running and listening to requests");
});
