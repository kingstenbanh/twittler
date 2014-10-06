$(document).ready(function(){

  var $tweetDisplay = $('.tweet-display');

  var index = streams.home.length - 1;

  while(index >= 0){
    var tweet = streams.home[index];
    var $tweetDiv = $('' +
      '<div class="container-fluid">' + 
        '<div class="row">' +
          '<div class="col-md-2">' + 
            '<img src="http://dummyimage.com/73x73/' + 
            getRandomColor() + '/' + getRandomColor() + '&amp;text=' + getRandomLetter() + '">' +
          '</div>' +
          '<div class="col-md-10">' +
            '<a href="#" class=' + tweet.user + '>@' + tweet.user + '</a><span> · </span>' +
            '<span class="time-stamp">' + 'a second ago' + '</span>' +
            '<p class="tweet-message">' + tweet.message + '</p>' +
          '</div>' +
        '</div>' + 
        '<hr>' +
      '</div>');
    
    $tweetDiv.appendTo($tweetDisplay);
    index -= 1;
  }
});

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