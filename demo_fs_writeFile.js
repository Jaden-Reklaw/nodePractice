//fs.writeFile will search the current directory for the file specified and try to replace the content
//if there is no file it will create a file.
var fs = require('fs');

//create a file named mynewfile3.txt:
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});