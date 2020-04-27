var belgium = {name: "belgium", score: 0, attributes: ["€0-750", "Combination", "Summer", "Short", "Normal", "Car", "No"]};
var iceland = {name: "iceland", score: 0, attributes: ["€750-1500", "Nature", "Summer", "Short", "Cold", "Plane", "A little"]};
var italy = {name: "italy", score: 0, attributes: ["€750-1500", "Combination", "Summer", "Long", "Hot", "Car", "A little"]};
var finland = {name: "finland", score: 0, attributes: ["€750-1500", "Nature", "Winter", "Medium", "Cold", "Plane", "A little"]};
var madagascar = {name: "madagascar", score: 0, attributes: ["€1500-2500", "Nature", "Spring", "Long", "Hot", "Plane", "A lot"]};
var namibia = {name: "namibia", score: 0, attributes: ["€2500-3500", "Nature", "Autumn", "Long", "Hot", "Plane", "A lot"]};
var destinations = [belgium, iceland, italy, finland, madagascar, namibia];

// Used .text() to get the text from the clicked button as suggested by ThiefMaster on the following page: https://stackoverflow.com/questions/10351658/javascript-get-custom-buttons-text-value 
$(".btn").click(function() {
    for (var i in destinations) {
        for (var j in destinations[i].attributes) {
            if ($(this).text() == destinations[i].attributes[j]) {
                destinations[i].score ++;
            }
        }
    }
});

$(".question7").click(function() {

    // Got some help from my mentor to get the code to determine one of the first choice destinations when there is a draw
    var highestScore = 0;
    var firstChoice = null;

    for (var i in destinations) {
        if (destinations[i].score > highestScore) {
            highestScore = destinations[i].score;
            firstChoice = destinations[i].name;
        }
    }

    window.location.href = "results/" + firstChoice + ".html";
});