# Dijkstras Algorithm

Algorithm, to calculate the shortest path/ optimal path from source of vertices.
this algorithm is developing using JavaScript, node modules and the spatial data format is geojson

## Step 1

Reading geojson file using fs module

## Step 2

Creating set of vertices those are from geojson
if set1=A, A={set of all vertices}

## Step 3

Assigning distance value to all vertices
Value of source vertex is 0
All other points are INFINITE

## step 4

Creating new set for shortest path / optimal path, to add their weight is less and removing those values from set A
set2 = B, B={vertices of shortest path}

## step 5

Repeating the same procedure till get the shortest path
and creating geojson file with output vertices.
