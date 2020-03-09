//Since the mynewfile3.txt is already created and in the same directory it overwrites the
//file with the new text 
var fs = require('fs');

//Replace the file with a new one:
fs.writeFile('mynewfile3.txt', 'Overwriting the old text.', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});