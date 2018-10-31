var fs = require('fs');
var data = fs.readFileSync('./geojson/data1.geojson');
data = JSON.parse(data);
console.log(data);
