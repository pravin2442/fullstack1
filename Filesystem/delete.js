const fs = require('fs');


const fileName = 'data.txt';

console.log('⏳ Waiting 10 seconds to delete data.txt...');

setTimeout(() => {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.error('❌ Error deleting file:', err);
    } else {
      console.log('🗑️ data.txt has been deleted successfully!');
    }
  });
}, 10000); 
