import express from "express";
import axios from "axios";

/* Create Express App */
const app = express();

/* Setup Middleware to parse body requests */
app.use(express.urlencoded({ extended: true }));

/* To get directory (used for EJS) */
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Set up EJS view engine */
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

/* Route handling */
app.get("/", async (req, res) => {
  const URL = "https://catfact.ninja/fact";

  /* use Axios to sent GET request (use try-catch in case error)*/
  try {
    /* Response of axios.get is an object with params of 
      {data, statusCode, statusMessage, ...} but here we 
      just destructure it to get only the data parameter */
    const {data} = await axios.get(URL);
    res.render("index", {data:data})
    
  } catch (err) {
    console.error(err.message);
    res.render("index", {error:err.message})
  }
});

app.get("/fetch", async (req, res) => {
  const URL = "https://catfact.ninja/fact";

  /* use fetch to sent GET request (use try-catch in case error)*/
  try {
    let response = await fetch(URL)
    let data = await response.json()
    res.render("index", {data:data})
    
  } catch (err) {
    console.error(err.message);
    res.render("index", {error:err.message})
  }
});

/* Create Listener */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
