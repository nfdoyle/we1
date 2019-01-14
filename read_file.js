/**************************************************
/**************************************************
Given Node's File System documentation, write a
command line program that reads a file and prints
its contents to standard output.

node read_file.js /tmp/test_async.txt

This program should receive a command line argument
using process.argv, and read the specified file
asynchronously.
@nfdoyle
**************************************************/
var myArgs = process.argv.slice(2);
var filePath = myArgs[0];
var fileData = "Testing asynchronous file write.\n";
var fs = require("fs");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});



// fs.writeFile(filePath, fileData, function(err) {
//   if (err) {
//     throw err;
//   }
//   console.log("Successfully wrote to", filePath);
// });