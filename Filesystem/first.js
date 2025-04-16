const fs = require('fs');


const content = 'Hello, my name is pravin';


fs.writeFile('data.txt', content, (err) => {
  if (err) {
    console.error('❌ Error writing to file:', err);
  } else {
    console.log('✅ File "data.txt" created and content written successfully!');
  }
});
