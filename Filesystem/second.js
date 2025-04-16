const fs = require('fs');


fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Error reading the file:', err);
    return;
  }


  console.log('📄 Content of data.txt:\n');
  console.log(data);
});
