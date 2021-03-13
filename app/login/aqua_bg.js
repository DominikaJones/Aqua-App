// Background Animation for Aquarium Care Web App

//Global variables, many are overwritten during runtime
var x_canv = 1000;
var y_canv = 600;
var timer = 0;

var num_bubbles = 10;
var myBubs = [];

function init() {

  for (var i = 0; i < num_bubbles; i++) {
    myBubs[i] = new Bubble()
  }
  myFish = new Fish()

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

  var grd = ctx.createLinearGradient(x_canv/2, 0, x_canv/2, y_canv);
  grd.addColorStop(1, "#7777FF");
  grd.addColorStop(0, "#33beFF");

  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, x_canv, y_canv);

  for (var i = 0; i < num_bubbles; i++) {
    myBubs[i].update();
    myBubs[i].draw(ctx);
  }
  myFish.draw(ctx, timer);
  myFish.update();

  timer += 3;
  if (timer >= 360) {
    timer = 0;
  }

  window.requestAnimationFrame(draw);
}

init();
