const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'node_modules', '.bin', 'react-scripts');
const filePathWindows = `${filePath}.cmd`;

try {
  if (fs.existsSync(filePath)) {
    fs.chmodSync(filePath, '755');
    console.log('Permissions updated for react-scripts');
  } else if (fs.existsSync(filePathWindows)) {
    fs.chmodSync(filePathWindows, '755');
    console.log('Permissions updated for react-scripts.cmd');
  } else {
    console.log('react-scripts not found');
  }
} catch (err) {
  console.error('Error updating permissions:', err);
}