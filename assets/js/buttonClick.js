$(document).ready(function() {

    // Used the reactions on the following link for the window.location.href: https://stackoverflow.com/questions/16959476/how-to-go-to-a-url-using-jquery
    $(".start-btn").click(function() {
        window.location.href = "questions.html";
    });

    $(".questions").find(".btn").click(function() {
        $(this).parent().parent().css("display", "none");
        $(this).parent().parent().next().css("display", "block");
    });

});