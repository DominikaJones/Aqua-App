// Background animation!
var x_canv = 1000;
var y_canv = 600;
var timer = 0;
var timer_max = y_canv;

var bubble_r = Math.random()*20+20
var bubble_x = Math.random()*x_canv;
var bubble_h = 0;


function init() {
  window.requestAnimationFrame(draw);
}

function draw() {
  //var ctx = document.getElementById('myCanvas').getContext('2d');
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  x_canv = window.innerWidth;
  y_canv = window.innerHeight;

  c.width = x_canv;
	c.height = y_canv;
  timer_max = y_canv;

  var grd = ctx.createLinearGradient(x_canv/2, 0, x_canv/2, y_canv);
  grd.addColorStop(0, "#9999FF");
  grd.addColorStop(1, "#0000FF");

  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, x_canv, y_canv);

  ctx.beginPath();
  ctx.arc(bubble_x, timer_max-timer, bubble_r, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'rgba(200, 200, 254, 0.5)';
  ctx.fill();

  timer += 1;
  if (timer >= timer_max) {
    timer = 0;
    bubble_r = Math.random()*30+10
    bubble_x = Math.random()*x_canv;
  }

  window.requestAnimationFrame(draw);
}

init();
