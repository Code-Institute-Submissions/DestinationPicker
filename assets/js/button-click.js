$(document).ready(function() {

    // Used the reactions on the following link for the window.location.href: https://stackoverflow.com/questions/16959476/how-to-go-to-a-url-using-jquery
    $(".start-btn").click(function() {
        window.location.href = "questions.html";
    });

    $(".question1").find(".btn").click(function() {
        $(".question1").css("display", "none");
        $(".question2").css("display", "block");
    });

    $(".question2").find(".btn").click(function() {
        $(".question2").css("display", "none");
        $(".question3").css("display", "block");
    });

    $(".question3").find(".btn").click(function() {
        $(".question3").css("display", "none");
        $(".question4").css("display", "block");
    });

    $(".question4").find(".btn").click(function() {
        $(".question4").css("display", "none");
        $(".question5").css("display", "block");
    });

    $(".question5").find(".btn").click(function() {
        $(".question5").css("display", "none");
        $(".question6").css("display", "block");
    });

    $(".question6").find(".btn").click(function() {
        $(".question6").css("display", "none");
        $(".question7").css("display", "block");
    });

    // Used the reactions on the following link for the window.location.href: https://stackoverflow.com/questions/16959476/how-to-go-to-a-url-using-jquery
    $(".question7").find(".btn").click(function() {
        window.location.href = "results.html";
    });

});