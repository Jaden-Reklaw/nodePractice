//With fs.open you create a file and with the flag w open the file to write in. If no w
//the file will not open to write automtically but it will create the fill.
var fs = require('fs');

//create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});