// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spacecraftName = "Determination";
var speedMPH = 17500;
var kilomitersToMars = 225000000;
var kilomitersToMoon = 384400;
var milesPerKilomiter = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilomitersToMars * milesPerKilomiter;
var hoursToMars = milesToMars / speedMPH;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
console.log("it will take ".concat(spacecraftName, " ").concat(daysToMars, " days to get to Mars!"));
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilomitersAway) {
    var milesAway = kilomitersAway * milesPerKilomiter;
    var hoursToLocation = milesAway / speedMPH;
    var daysAway = hoursToLocation / 24;
    return daysAway;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log("it will take ".concat(spacecraftName, " ").concat(getDaysToLocation(kilomitersToMars), " days to get to Mars!"));
console.log("it will take ".concat(spacecraftName, " ").concat(getDaysToLocation(kilomitersToMoon), " days to get to Moon!"));
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
