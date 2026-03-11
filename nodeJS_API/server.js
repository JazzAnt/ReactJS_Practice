import express from "express";
import axios from "axios";

/* Create Express App */
const app = express();

/* Setup Middleware to parse body requests */
app.use(express.urlencoded({ extended: true }));

/* To get directory */
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Create Listener */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
