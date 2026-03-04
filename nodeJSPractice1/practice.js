// to run in terminal: node index.js
// if haven't install node at nodejs.org
console.log("Hello Node");

// importing node modules
import fs from "fs";

// fs is filesystem, allows manipulating files e.g. copy and paste

// copyFile = async, other commands will proceed without waiting for this to finish
// copyFileSync = synchronous (blocking mode, so all other commands waits for it to finish)
fs.copyFile(
  "file1.txt", //source
  "file2.txt", //destination, if already exists then overwrite
  //mode, what happens after copyFile is done
  //receives an error as arg, will be undefined if no error happens
  (err) => {
    if (err) console.log(err);
    else console.log("copyFile success");
  },
);

//this should show up before copyFile since copyFile is async
console.log("Code after Copyfile")
