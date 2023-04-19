const fs = require('fs');

const data = {
  plant_state: {
    health: true,
    time_updated: new Date().toISOString()
  }
};

fs.writeFile('data.json', JSON.stringify(data), function (err) {
  if (err) throw err;
  console.log('Data written to file!');
});
