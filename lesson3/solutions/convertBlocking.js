// 1. Start by changing the call from readFileSync() to readFile().
// 2. To finish it up, remove the contents var declaration, and move the call to console.log() inside your callback.

var fs = require('fs');

fs.readFile('hello.html', function(error, contents) {
  if (error) {
    console.log(error);
  } else {
    console.log(contents.toString());
  }
});
