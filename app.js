$(document).ready(function(){

  var $tweetDisplay = $('.tweet-display');

  var index = streams.home.length - 1;

  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="container"></div>');
    var $handler = $('<a href="#" class=' + tweet.user + '>' + '@' + tweet.user + '</a>' + '<span> · </span>');
    var $timeStamp = $('<span>a second ago</span>' + '<br>');
    
    $tweet.text(tweet.message);
    
    $timeStamp.prependTo($tweet);
    $handler.prependTo($tweet);
    $tweet.appendTo($tweetDisplay);
    index -= 1;
  }
});