const fs = require('fs');

const newContent = '\n i am coming from chennai';


fs.appendFile('data.txt', newContent, (err) => {
  if (err) {
    console.error('❌ Error appending to file:', err);
  } else {
    console.log('✅ New content appended to data.txt successfully!');
  }
});

