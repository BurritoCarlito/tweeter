/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
    const data = {
        "user": {
          "name": "Newton",
          "avatars": "https://i.imgur.com/73hZDYK.png",
            "handle": "@SirIsaac"
          },
        "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
          },
        "created_at": 1461116232227
      }


    const oneTweet = createTweetElement(data)
    $('.feed').append(oneTweet)

})

function createTweetElement(tweetData) {
    const tweet = `<article class="tweets">
          <header>
            <div id="avatar">
              <img src=${tweetData.user.avatars}></img>
              <h2>
                ${tweetData.user.name}
              </h2>
              <div class="username">
              ${tweetData.user.handle}
              </div>
            </div>
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
          </header>
        </article>`

    return tweet  
}


