/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]



    // const oneTweet = createTweetElement(data)
    // $('.feed').append(oneTweet)

    function createTweetElement(tweetData) {
      const tweet = `<article class="tweets">
            <header>
              <div id="avatar">
                <div class="avatar-Img">
                <img src=${tweetData.user.avatars}></img>
                <h2>
                  ${tweetData.user.name}
                </h2>
                </div>
                <div class="username">
                ${tweetData.user.handle}
                </div>
              </div>
              </header>
              <div class="tweet">
                <p>
                  ${tweetData.content.text}
                </p>
              </div>
              <footer>
                <div class="timeStamp">
                    ${tweetData.created_at}
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
  
  renderTweets(data);

  $(".form").submit(function(event) {
    console.log("CLICK");
    event.preventDefault()

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(".form").serialize(),
      success: () => {
        console.log("we did it")
      } 
    });


    // let post = $.post("http://localhost:8080/");
    // console.log(post);
  });

  
})

