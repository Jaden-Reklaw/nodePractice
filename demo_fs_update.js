//Since mynewfile1 has already been created it will append the information This is my text to the file.
//node demo_fs_update.js
var fs = require('fs');

//append content at the end of the file:
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});