Trains app.


You have to have Node.js to be able to run the code. The source code of the app is in "src" folder. It is written in ES6 but due to the reason that Node.js doesn't currently support ES6 it is converted to ES5 using babel. Converted code is in the folder "dist". 

To run the application follow these steps:

1) open command line
2) go to project's root folder
3) type "node dist/main.js command.txt" 


You can run the application in 2 ways.

node dist/main.js command.txt 

or

node dist/main.js command.txt map.txt

If the second parameter is skipped the app will load "map.txt" by default.



USAGE:

Application input consists of 2 parts:


1) List of nodes connected between each other and the distance between them. It represents the whole map of points. (map.txt)

Example:

A B 5
B C 4
C D 8
D C 8
D E 6
A D 5
C E 2
E B 3
A E 7

Means A is connected to B and the distance between them is 5. All points follow this rule. 

2) List of commands. (command.txt)

There are following list of commands:

1. Distance_of_the_route_between - Distance of the route between points. After this parameter you have to specify at least 2 points divided by spaces. Usage example:

Distance_of_the_route_between A B C

2. Shortest_route_between_items - Shortes route between 2 points. After this parameter you have to specify 2 points divided by spaces. Usage example:

Shortest_route_between_items A C

3. The_number_of_routes_with_maximum_distance_of - The number of routes within maximum given distance. After this parameter you have to specify 2 points and maximum distance, divided by spaces. Usage example:

The_number_of_routes_with_maximum_distance_of C C 30

4. Trips_with_maximum_stops_of - The number of trips between 2 points with maximum given stops. After this parameter you have to specify 2 points and maximum count of stops, divided by spaces. Usage example:

Trips_with_maximum_stops_of C C 3

5. Trips_with_exact_stops_of - The number of trips between 2 points with exactly given stops count. After this parameter you have to specify 2 points and exact count of stops, divided by spaces. Usage example:

Trips_with_exact_stops_of A C 4



To add new commands change command.txt file in root folder.
