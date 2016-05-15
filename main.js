// infinity plus one
// scroll from zero to infinity on any webpage
// brillz
// https://stackoverflow.com/questions/17540458/stack-overflow-error-in-javascript-when-recursively-scrolling-to-the-bottom-of-t
//
// initialize some settings
var sleep_val = 5000;
var xstep,ystep = (0,50); // this doesn't really do what I think it does

var position = {
  current : function() {
    return document.body.scrollTop;
  },
  next : function() {
    return this.current() + ystep;
  },
  scrollToNext : function() {
    document.body.scrollTo(this.next());
    return this.current();
  },
  height : function() {
    return document.body.scrollHeight;
  }
}

// don't really need these
var gold_middle_finger = 63667;
var gold_middle_finger_div = '<li class="post" id="post_122371942349">';
var test_url = 'http://thelivest1.com/';

var scrollingTo = function(height) {
  if ( height() !== 'undefined' ) {
    if ( position.current() <= height()) {
      console.log(position.next());
      document.body.scrollTo(0,position.next());
      setTimeout(scrollingTo(height), sleep_val);
    } 
  }
}

var bottom = function() {
  for ( i = next_step; i < height; i++) {
    document.body.scrollTo(0, i);
  }
}

function init() {
  scrollingTo();
}

window.onload = init;

//body.offsetHeight()
//body.offsetWidth()
//body.clientHeight()
