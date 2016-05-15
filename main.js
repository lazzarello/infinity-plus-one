// infinity plus one
// scroll from zero to infinity on any webpage

// initialize some settings
var bartop = document.body.scrollTop;
var height = document.body.scrollHeight;
var xstep,ystep = (0,50); // this doesn't really do what I think it does
var position = bartop;
var next_step = position + ystep;
var sleep_val = 500;
var gold_middle_finger = 63667;
var gold_middle_finger_div = '<li class="post" id="post_122371942349">';
var test_url = 'http://thelivest1.com/';

// recursive function to keep scrolling to the next step after sleeping for sleep_value between steps
function scrollingTo(next_step) {
  document.body.scrollTo(0,next_step);
  position = document.body.scrollTop;
  next_step = position + ystep;
  scrollingTo(next_step);
  sleep(sleep_val);
}

// start scrolling function
var startScroll = function() {
  scrollingTo(next_step);
}

// invoke the function to start scrolling
startScroll();

//body.offsetHeight()
//body.offsetWidth()
//body.clientHeight()
