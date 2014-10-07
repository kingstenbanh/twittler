var getRandomColor = function () {
  var letters = '0123456789ABCDEF'.split('');
  var color = "";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var getRandomLetter = function () {
  return String.fromCharCode(Math.floor(Math.random() * 25 + 65));
}

// Adding tweet one by one to DOM 
var count = streams.home.length - 1;

var displayTweets = function (userName) {

  var $tweetDisplay = $('#tweetDisplay');
  var $tweets = streams.home;
  var index = userName ? streams.users[userName].length - 1 : $tweets.length - 1;

  while(index >= 0){
    var tweet = userName ? streams.users[userName][index] : $tweets[index];

    var $tweetDiv = $('' +
      '<div class="container-fluid singleTweet">' + 
        '<div class="row">' +
          '<div class="col-md-2">' + 
            '<img src="http://dummyimage.com/73x73/' + 
            getRandomColor() + '/' + getRandomColor() + '&amp;text=' + getRandomLetter() + '">' +
          '</div>' +
          '<div class="col-md-10">' +
            '<a href="#" class=' + tweet.user + '>@' + tweet.user + '</a><span> · </span>' +
            '<span class="time-stamp">' + moment(tweet.created_at).fromNow() + '</span>' +
            '<p class="tweet-message">' + tweet.message + '</p>' +
          '</div>' +
        '</div>' + 
        '<hr>' +
      '</div>');
    
    $tweetDiv.appendTo($tweetDisplay);
    index -= 1;
  }
  count = streams.home.length - 1;
};

// Automatically generate tweets every 4 seconds
var newTimer;

var autoShowTweets = function() {
  newTimer = setInterval(function() {
    var countCheck = streams.home.length - 1;
    if (countCheck > count) {
      var numTweets = countCheck - count;
      $('#tweetCount').text('View ' + numTweets + ' new Tweets');
      $('title').text('Kingsten | (' + numTweets + ') Twitter');
      $('#displayNewTweet').fadeIn();
    }
  }, 4000);
}

$(document).ready(function(){

  displayTweets();
  autoShowTweets();

  $('#showNewTweets').on('click', function(event) {
    event.preventDefault();
    $('.singleTweet').remove();
    displayTweets();
    $('#displayNewTweet').slideUp();
    $('title').text('Kingsten | Twitter');
    clearInterval(newTimer);
    autoShowTweets();
    $('.title').text("Tweets");
  });

  // Show user
  $('#tweetDisplay').on('click', 'a', function() {
    $('.singleTweet').remove();
    var user = this.getAttribute('class');
    displayTweets(user);
    $('.title').text(user + "'s Tweets");
  });

});


