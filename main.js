// infinity plus one
// scroll from zero to infinity on any webpage

// initialize some settings
var position = document.body.scrollTop;
var xstep,ystep = (0,50); // this doesn't really do what I think it does
var next_step = position + ystep;
var sleep_val = 5000;

// don't really need these
var height = document.body.scrollHeight;
var gold_middle_finger = 63667;
var gold_middle_finger_div = '<li class="post" id="post_122371942349">';
var test_url = 'http://thelivest1.com/';

// recursive function to keep scrolling to the next step after sleeping for sleep_value between steps
console.log("current position is: " + position);
function scrollingTo() {
  console.log("next step is: " + next_step);
  document.body.scrollTo(0,next_step);
  position = document.body.scrollTop;
  console.log("current position is: " + position);
  next_step = position + ystep;
  setTimeout(scrollingTo(), sleep_val);
}

function init() {
  scrollingTo();
}

window.onload = init;

//body.offsetHeight()
//body.offsetWidth()
//body.clientHeight()
