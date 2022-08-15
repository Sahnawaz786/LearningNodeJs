//Reading and writing a file synchronously...
const fs = require("fs");
const data = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(data);

fs.writeFileSync("./txt/sahnawaz.txt", `${data}`);
console.log("Completed writing a file");

//Reading and writing files asychronously

const fs = require("fs");

fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
  fs.readFile("./txt/kalam.txt", "utf-8", (err, data2) => {
    fs.writeFile("./txt/new.txt", `${data}\n${data2}`, (err) => {
      console.log(err);
    });
  });
});
console.log("Reading files");

//the advantages of doing asynchrous way is that it doesn't blocks the code and hence the other peices of code get executed without distrubance..

//Appending a file using file system

// 1.Create a file and then enter some data

const fs = require("fs");

fs.writeFile("./txt/sabaz.js", "console.log('Hello World')", (err) => {
  console.log("File Created Succesfully!");
});

//Appending file with extra content
fs.appendFile(
  "./txt/sabaz.js",
  "let x='Sahnawaz alam'\n console.log(x)",
  (err) => {
    console.log("File Appended");
  },
);

//Deleting the file

fs.unlink("./txt/sabaz.js", (err) => {
  console.log("File Deleted Succesfully");
});

//NOTE:

// In this way we can create , read, append and delete the files we can write any content in the files including txt files js file and everyFiles
