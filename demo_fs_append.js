//Using fs.appendFile you can either append to a file or create a file if it does not exist
//Once you run node demo_fs_append.js it should say saved in the console and create the file
//mynewfile1.txt if you run it again it will add another Hello Content! to the file.
var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
