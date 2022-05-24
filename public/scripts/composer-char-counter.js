$(document).ready(function() {
  $("textarea").on("input", function () {
    const counter = $(this).next().children(".counter");
    const tweetLength = $(this).val().length;
    const charLimit = "140";
    const charCount = charLimit - tweetLength;
    $(counter).val(charCount);

    if (charCount < 100) {
      $("#counter").css("color", "red");
    } else {
      $("#counter").css("color", "black");
    }
  });
});