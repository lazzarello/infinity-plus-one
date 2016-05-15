// infinity plus one
// scroll from zero to infinity on any webpage
// brillz
// https://stackoverflow.com/questions/17540458/stack-overflow-error-in-javascript-when-recursively-scrolling-to-the-bottom-of-t
//
// initialize some settings
var xstep,ystep = (0,50); // this doesn't really do what I think it does
var sleep_val = 5000;
var position = function() {
  return document.body.scrollTop;
}

var height = document.body.scrollHeight;
var time = Date.now; // not used yet

// don't really need these
var gold_middle_finger = 63667;
var gold_middle_finger_div = '<li class="post" id="post_122371942349">';
var test_url = 'http://thelivest1.com/';

// recursive function to keep scrolling to the next step after sleeping for sleep_value between steps
//console.log("current position is: " + position);

var scrollingTo = function(height) {
  if ( height !== 'undefined' ) {
    //console.log("current height is: " + height);
    var next_step = position() + ystep;

    if ( position <= height) {
      //console.log("next step is: " + next_step);
      document.body.scrollTo(0,next_step);
      //console.log("scrolled to next step: " + next_step);
      position = document.body.scrollTop;
      //console.log("current position is: " + position);
      next_step = position + ystep;
      setTimeout(scrollingTo(), sleep_val);
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
