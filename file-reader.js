/**************************************************
/**************************************************

**************************************************/
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});

var filePath = "/tmp/test_async.txt";
var fileData = "Testing asynchronous file write.\n";

fs.writeFile(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }
  console.log("Successfully wrote to", filePath);
});