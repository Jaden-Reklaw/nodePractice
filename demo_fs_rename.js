//Rename method renames the file if the file exist
//mynewfile1.txt will change to myrenamedfile.txt
//node demo_fs_rename.js
var fs = require('fs');

//Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});