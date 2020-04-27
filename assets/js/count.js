var belgium = {name: "belgium", score: 0, attributes: ["€0-750", "Combination", "Summer", "Short", "Normal", "Car", "No"]};
var iceland = {name: "iceland", score: 0, attributes: ["€750-1500", "Nature", "Summer", "Short", "Cold", "Plane", "A little"]};
var italy = {name: "italy", score: 0, attributes: ["€750-1500", "Combination", "Summer", "Long", "Hot", "Car", "A little"]};
var finland = {name: "finland", score: 0, attributes: ["€750-1500", "Nature", "Winter", "Medium", "Cold", "Plane", "A little"]};
var madagascar = {name: "madagascar", score: 0, attributes: ["€1500-2500", "Nature", "Spring", "Long", "Hot", "Plane", "A lot"]};
var namibia = {name: "namibia", score: 0, attributes: ["€2500-3500", "Nature", "Autumn", "Long", "Hot", "Plane", "A lot"]};
var destinations = [belgium, iceland, italy, finland, madagascar, namibia];

// Used .text() to get the text from the clicked button as suggested by ThiefMaster on the following page: https://stackoverflow.com/questions/10351658/javascript-get-custom-buttons-text-value 
$(".btn").click(function() {
    for (var i in belgium.attributes) {
        if ($(this).text() == belgium.attributes[i]) {
            belgium.score ++;
        }
    }
    for (var i in iceland.attributes) {
        if ($(this).text() == iceland.attributes[i]) {
            iceland.score ++;
        }
    }
    for (var i in italy.attributes) {
        if ($(this).text() == italy.attributes[i]) {
            italy.score ++;
        }
    }
    for (var i in finland.attributes) {
        if ($(this).text() == finland.attributes[i]) {
            finland.score ++;
        }
    }
    for (var i in madagascar.attributes) {
        if ($(this).text() == madagascar.attributes[i]) {
            madagascar.score ++;
        }
    }
    for (var i in namibia.attributes) {
        if ($(this).text() == namibia.attributes[i]) {
            namibia.score ++;
        }
    }
});

$(".question7").click(function() {
    var highestScore = 0;
    var firstChoice = null;

    for (var i in destinations) {
        if (destinations[i].score > highestScore) {
            highestScore = destinations[i].score;
            firstChoice = destinations[i].name;
        }
    }

    window.location.href = "results/" + firstChoice + ".html";

    // if(belgium.score>iceland.score && belgium.score>italy.score && belgium.score>finland.score && belgium.score>madagascar.score && belgium.score>namibia.score) {
    //     window.location.href = "results/belgium.html";
    // } else {
    //     if(iceland.score>italy.score && iceland.score>finland.score && iceland.score>madagascar.score && iceland.score>namibia.score) {
    //         window.location.href = "results/iceland.html";
    //     } else {
    //         if(italy.score>finland.score && italy.score>madagascar.score && italy.score>namibia.score) {
    //             window.location.href = "results/italy.html";
    //         } else {
    //             if(finland.score>madagascar.score && finland.score>namibia.score) {
    //                 window.location.href = "results/finland.html";
    //             } else {
    //                 if(madagascar.score>namibia.score) {
    //                     window.location.href = "results/madagascar.html";
    //                 } else {
    //                     window.location.href = "results/namibia.html";
    //                 }
    //             }
    //         }
    //     }
    // }
});

$(this).click(function() {
    console.log(belgium.score, iceland.score, italy.score, finland.score, madagascar.score, namibia.score);
});