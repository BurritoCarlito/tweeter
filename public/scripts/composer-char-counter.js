$(document).ready(function() {

  $("textarea").on("input", function () {

    const counter = $(this).next().children(".counter");
    const tweetLength = $(this).val().length;
    const limit = "140";
    const charCount = limit - tweetLength;

    $(counter).val(charCount);

    if (charCount < 0) {
      $("#counter").css("color", "red");
    } else {
      $("#counter").css("color", "black");
    }
  });
});