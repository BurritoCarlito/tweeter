/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

    // const oneTweet = createTweetElement(data)
    // $('.feed').append(oneTweet)
  
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  function createTweetElement(tweetData) {
    const tweet = `<article class="tweets">
      <header>
        <div id="avatar">
          <div class="avatar-Img">
            <img src=${tweetData.user.avatars}></img>
              <h2>${tweetData.user.name}</h2>
              </div>
              <div class="username">${tweetData.user.handle}</div>
              </div>
              </header>
              <div class="tweet">
                <p>${escape(tweetData.content.text)}</p>
              </div>
              <footer>
                <div class="timeStamp">
                    ${timeago.format(tweetData.created_at)}
                </div>
                <div class="icons">
                  <i class="fa-solid fa-flag"></i>
                  <i class="fa-solid fa-retweet"></i>
                  <i class="fa-solid fa-heart"></i>
                </div>
              </footer>
          </article>`
  
      return tweet  
  }
  
  function renderTweets(tweetData) {
    for (let tweet of tweetData) {
      const $tweet = createTweetElement(tweet);
      $(".tweets-container").append($tweet);
    }
    return;
  };
  
  $(".form").submit(function(event) {
    console.log("CLICK");
    event.preventDefault()

    let info = $(".form").serializeArray();
      if (info[0].value.length === 0 ) {
        $(errorMessage).text("ERROR: Tweet cannot be empty!").slidedown(100);
      } else if (info[0].value.length > 140) {
        $(errorMessage).text("ERROR: Tweet is too long! Try to Shorten it!").slidedown(100);
      } else {

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(this).serialize(),
    })
    .then($(".form").text())
    .then(loadTweets)
    .then($(".form")[0].reset());
  }
  });

  function loadTweets() {
    console.log("loading tweets")
    $.ajax("/tweets", { method: "GET" })
      .then(tweets => renderTweets(tweets))
  }

  loadTweets();

});

