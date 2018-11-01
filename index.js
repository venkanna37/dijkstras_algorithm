// Dijkstra's Algorithm

// Reading geojson file

var fs = require('fs');
var data = fs.readFileSync('./geojson/data1.geojson');
data = JSON.parse(data);

// Array of Segments

var segments = [];
for (var i = 0; i < data.features.length; i++) {
segments.push(data.features[i].geometry.coordinates);
}

// Array of coordinates

var seg_coords = [];
for (var i = 0; i < data.features.length; i++) {
  for (var j = 0; j < data.features[i].geometry.coordinates.length; j++) {
      if (data.features[i].geometry.coordinates[j]) {
        seg_coords.push(data.features[i].geometry.coordinates[j]);
      }
  }
}
//console.log(seg_coords);

var coords = new Set([]);
for (var i = 0; i < seg_coords.length; i++) {
  coords.add(seg_coords[i]);
}
console.log(coords);
