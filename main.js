// infinity plus one
// scroll from zero to infinity and beyond on any webpage
// 
// Decent ref on scrolling to the bottom
// https://stackoverflow.com/questions/17540458/stack-overflow-error-in-javascript-when-recursively-scrolling-to-the-bottom-of-t
//
// don't really need these
var gold_middle_finger = 63667;
var gold_middle_finger_div = '<li class="post" id="post_122371942349">';
var test_url = 'http://thelivest1.com/';

// initialize some settings
var sleep_val = 1000;
var ystep = 371;

var position = {
  current : function() {
    return document.body.scrollTop;
  },
  next : function() {
    return this.current() + ystep;
  },
  scrollToNext : function() {
    document.body.scrollTo(0,this.next());
    return this.current();
  },
  height : function() {
    return document.body.scrollHeight;
  }
}

// perhaps a for loop here which passes the incremented value to scrollTo()

//for( i = 0; i <= position.height(); i++) {
//  setTimeout(document.body.scrollTo(0,position.next()), sleep_val);
//}

function startScrolling() {
  if ( position.height() !== 'undefined' || position.current() < position.height() ) {
    setTimeout(function() {
      position.scrollToNext();
      startScrolling();
    }, sleep_val);
  }
}

function init() {
  scrollingTo();
}

window.onload = init;
