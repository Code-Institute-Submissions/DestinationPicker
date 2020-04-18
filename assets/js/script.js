$(document).ready(function() {

  $(".btnsQ1>.btn").click(function() {
      $(".question1").css("display", "none");
      $(".question2").css("display", "block");
  });

  $(".btnsQ2>.btn").click(function() {
      $(".question2").css("display", "none");
      $(".question3").css("display", "block");
  });

});