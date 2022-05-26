/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

    // const oneTweet = createTweetElement(data)
    // $('.feed').append(oneTweet)

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
                <p>${tweetData.content.text}</p>
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
  
      console.log("........", $tweet);
      $(".tweets-container").append($tweet);
    }
    return;
  };
  
  $(".form").submit(function(event) {
    console.log("CLICK");
    event.preventDefault()

    //create helper function to better access the array value, given the html input name

    let info = $(".form").serializeArray();
      if (info[0].value.length === 0 ) {
        alert("Tweet Cannot be Empty!");
      } else if (info[0].value.length > 140) {
        alert("Tweet Cannot be longer than 140 characters")
      } else {
  
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(".form").serialize(),
      success: () => {
        console.log($(".form").serialize());
      } 
    });
  }
  });

  function loadTweets() {
    console.log("loading tweets")
    $.ajax("/tweets", { method: "GET" })
      .then( tweets => renderTweets(tweets))
  };

  loadTweets();

});

