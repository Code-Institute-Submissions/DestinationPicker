var belgium = {score: 0, costs: "€0-750", surrounding: "Combination", season: "Summer", traveltime: "Short", weather: "Normal", transport: "Car", culture: "No"};
var iceland = {score: 0, costs: "€750-1500", surrounding: "Nature", season: "Summer", traveltime: "Short", weather: "Cold", transport: "Plane", culture: "A little"};
var italy = {score: 0, costs: "€750-1500", surrounding: "Combination", season: "Summer", traveltime: "Long", weather: "Hot", transport: "Car", culture: "A little"};
var finland = {score: 0, costs: "€750-1500", surrounding: "Nature", season: "Winter", traveltime: "Medium", weather: "Cold", transport: "Plane", culture: "A little"};
var madagascar = {score: 0, costs: "€1500-2500", surrounding: "Nature", season: "Spring", traveltime: "Long", weather: "Hot", transport: "Plane", culture: "A lot"};
var namibia = {score: 0, costs: "€2500-3500", surrounding: "Nature", season: "Autumn", traveltime: "Long", weather: "Hot", transport: "Plane", culture: "A lot"};

// Used .text() to get the text from the clicked button as suggested by ThiefMaster on the following page: https://stackoverflow.com/questions/10351658/javascript-get-custom-buttons-text-value 
$(".btn").click(function() {
    if($(this).text() == belgium.costs || $(this).text() == belgium.surrounding) {
        belgium.score ++;
    }
    if($(this).text() == iceland.costs || $(this).text() == iceland.surrounding) {
        iceland.score ++;
    }
    if($(this).text() == italy.costs || $(this).text() == italy.surrounding) {
        italy.score ++;
    }
    if($(this).text() == finland.costs || $(this).text() == finland.surrounding) {
        finland.score ++;
    }
    if($(this).text() == madagascar.costs || $(this).text() == madagascar.surrounding) {
        madagascar.score ++;
    }
    if($(this).text() == namibia.costs || $(this).text() == namibia.surrounding) {
        namibia.score ++;
    }
});

$(this).click(function() {
    console.log(belgium.score, iceland.score, italy.score, finland.score, madagascar.score, namibia.score)
});