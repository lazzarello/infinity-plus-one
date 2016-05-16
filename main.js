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
// this blows away any variables or functions
window.location = test_url;

// initialize some settings
var sleep_val = 333; // 1/3 a second seems like a good scroll speed
var ystep = 371; // this value is a single press of the page down key on Chrome 51 OS X

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

function startScrolling() {
  // if we can scroll some more, scroll to next, if we can't, try again.
  if ( position.height() !== 'undefined' || position.current() < position.height() ) {
    setTimeout(function() {
      position.scrollToNext();
      startScrolling();
    }, sleep_val);
  } else {
    setTimeout(function() {
      startScrolling();
    }, sleep_val);
  } 
}

window.onload = startScrolling();
