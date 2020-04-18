$(document).ready(function() {

    $(".btn").hover(
        function() {
            $(this).css({"border" : "#5C2751", "background-color" : "#5C2751"});
        }, function() {
            $(this).css({"border" : "#F0AD4E", "background-color" : "#F0AD4E"});
        }
    );

    $(".btnsQ1>.btn").click(function() {
        $(".question1").css("display", "none");
        $(".question2").css("display", "block");
    });

    $(".btnsQ2>.btn").click(function() {
        $(".question2").css("display", "none");
        $(".question3").css("display", "block");
    });

    $(".btnsQ3>.btn").click(function() {
        $(".question3").css("display", "none");
        $(".question4").css("display", "block");
    });

    $(".btnsQ4>.btn").click(function() {
        $(".question4").css("display", "none");
        $(".question5").css("display", "block");
    });

    $(".btnsQ5>.btn").click(function() {
        $(".question5").css("display", "none");
        $(".question6").css("display", "block");
    });

    $(".btnsQ6>.btn").click(function() {
        $(".question6").css("display", "none");
        $(".question7").css("display", "block");
    });

    $(".btnsQ7>.btn").click(function() {
        $(".question7").css("display", "none");
        $(".question8").css("display", "block");
    });

});