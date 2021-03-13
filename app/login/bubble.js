// Background Animation for Aquarium Care Web App

//Global variables, many are overwritten during runtime
var x_canv = 1000;
var y_canv = 600;
var timer = 0;
var timer_max = 360;

var num_bubbles = 10;

//Define a class for my bubbles!
class Bubble {
  constructor() {
    this.x = Math.random()*x_canv;
    this.depth = Math.random()*y_canv;
    this.radius = Math.random()*30+10;
  }
  //This draws the bubble!
  draw(myCtx) {
    myCtx.beginPath();
    myCtx.arc(this.x, (y_canv-this.depth), this.radius, 0, 2 * Math.PI, false);
    myCtx.fillStyle = 'rgba(200, 200, 254, 0.5)';
    myCtx.fill();
  }
  // This updates the bubble position
  update() {
    this.x += Math.random() - 0.5;
    this.depth += 1;
    if (this.depth >= y_canv+40) {
      this.refresh();
    }
  }
  //This starts the bubble at the bottom of the screen
  refresh() {
    this.x = Math.random()*x_canv;
    this.depth = -20;
    this.radius = Math.random()*30+10;
  }
}

var myBubs = [];

function init() {

  for (var i = 0; i < num_bubbles; i++) {
    myBubs[i] = new Bubble()
  }

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


  for (var i = 0; i < num_bubbles; i++) {
    myBubs[i].update()
    myBubs[i].draw(ctx)
  }

  timer += 1;
  if (timer >= timer_max) {
    timer = 0;
  }

  window.requestAnimationFrame(draw);
}

init();
