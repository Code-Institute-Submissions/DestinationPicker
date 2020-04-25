var belgium = {score: 0, costs: "€0-750", surrounding: "Combination", season: "Summer", traveltime: "Short", weather: "Normal", transport: "Car", culture: "No"};
var iceland = {score: 0, costs: "€750-1500", surrounding: "Nature", season: "Summer", traveltime: "Short", weather: "Cold", transport: "Plane", culture: "A little"};
var italy = {score: 0, costs: "€750-1500", surrounding: "Combination", season: "Summer", traveltime: "Long", weather: "Hot", transport: "Car", culture: "A little"};
var finland = {score: 0, costs: "€750-1500", surrounding: "Nature", season: "Winter", traveltime: "Medium", weather: "Cold", transport: "Plane", culture: "A little"};
var madagascar = {score: 0, costs: "€1500-2500", surrounding: "Nature", season: "Spring", traveltime: "Long", weather: "Hot", transport: "Plane", culture: "A lot"};
var namibia = {score: 0, costs: "€2500-3500", surrounding: "Nature", season: "Autumn", traveltime: "Long", weather: "Hot", transport: "Plane", culture: "A lot"};

$(".question1").find(".btn").click(function() {
        if("€0-750" == belgium.costs) {
            belgium.score ++;
        }
    });

$(this).click(function() {
        console.log(belgium.score, iceland.score, italy.score, finland.score, madagascar.score, namibia.score)
    });