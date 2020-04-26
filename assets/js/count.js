var belgium = {score: 0, costs: "€0-750", surrounding: "Combination", season: "Summer", traveltime: "Short", weather: "Normal", transport: "Car", culture: "No"};
var iceland = {score: 0, costs: "€750-1500", surrounding: "Nature", season: "Summer", traveltime: "Short", weather: "Cold", transport: "Plane", culture: "A little"};
var italy = {score: 0, costs: "€750-1500", surrounding: "Combination", season: "Summer", traveltime: "Long", weather: "Hot", transport: "Car", culture: "A little"};
var finland = {score: 0, costs: "€750-1500", surrounding: "Nature", season: "Winter", traveltime: "Medium", weather: "Cold", transport: "Plane", culture: "A little"};
var madagascar = {score: 0, costs: "€1500-2500", surrounding: "Nature", season: "Spring", traveltime: "Long", weather: "Hot", transport: "Plane", culture: "A lot"};
var namibia = {score: 0, costs: "€2500-3500", surrounding: "Nature", season: "Autumn", traveltime: "Long", weather: "Hot", transport: "Plane", culture: "A lot"};

// Used .text() to get the text from the clicked button as suggested by ThiefMaster on the following page: https://stackoverflow.com/questions/10351658/javascript-get-custom-buttons-text-value 
$(".btn").click(function() {
    if($(this).text() == belgium.costs || $(this).text() == belgium.surrounding || $(this).text() == belgium.season || $(this).text() == belgium.traveltime || $(this).text() == belgium.weather || $(this).text() == belgium.transport || $(this).text() == belgium.culture) {
        belgium.score ++;
    }
    if($(this).text() == iceland.costs || $(this).text() == iceland.surrounding || $(this).text() == iceland.season || $(this).text() == iceland.traveltime || $(this).text() == iceland.weather || $(this).text() == iceland.transport || $(this).text() == iceland.culture) {
        iceland.score ++;
    }
    if($(this).text() == italy.costs || $(this).text() == italy.surrounding || $(this).text() == italy.season || $(this).text() == italy.traveltime || $(this).text() == italy.weather || $(this).text() == italy.transport || $(this).text() == italy.culture) {
        italy.score ++;
    }
    if($(this).text() == finland.costs || $(this).text() == finland.surrounding || $(this).text() == finland.season || $(this).text() == finland.traveltime || $(this).text() == finland.weather || $(this).text() == finland.transport || $(this).text() == finland.culture) {
        finland.score ++;
    }
    if($(this).text() == madagascar.costs || $(this).text() == madagascar.surrounding || $(this).text() == madagascar.season || $(this).text() == madagascar.traveltime || $(this).text() == madagascar.weather || $(this).text() == madagascar.transport || $(this).text() == madagascar.culture) {
        madagascar.score ++;
    }
    if($(this).text() == namibia.costs || $(this).text() == namibia.surrounding || $(this).text() == namibia.season || $(this).text() == namibia.traveltime || $(this).text() == namibia.weather || $(this).text() == namibia.transport || $(this).text() == namibia.culture) {
        namibia.score ++;
    }
});

$(".question7").click(function() {
        window.location.href = "results/belgium.html";
    });

$(this).click(function() {
    console.log(belgium.score, iceland.score, italy.score, finland.score, madagascar.score, namibia.score)
});