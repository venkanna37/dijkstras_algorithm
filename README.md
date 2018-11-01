# Dijkstras Algorithm

Algorithm, to calculate the shortest path/ optimal path from source of vertices.
developing this algorithm using JavaScript, node modules and the spatial data format is geojson

## Step 1

Reading geojson file using fs module

## Step 2

Creating set of vertices those are from geojson
if set1=A, A={set of all vertices}

## Step 3

Assigning weights to all vertices
Assign 0 to source vertex and  
The value of all other vertices as INFINITE

## step 4

Next step is, move on to next vertices which are connected to source vertex and find the minimum path to reach them by added the weights of path followed.

## step 5

Repeat the step 4 till we reach the end vertex
and creating geojson file with output vertices.
