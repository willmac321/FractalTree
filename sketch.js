var depth=12;
var res;
var r;
var g;
var b;
function setup(){
    createCanvas(600,600);
    res=(width-10)/factorial(depth);
    //noLoop();
    r=10;//random(255);
    g=random(255);
    b=random(255);
}

function draw(){
  background(51);
//  depth=ceil(random(16));
//  res=(width-10)/factorial(depth);
  translate(width/2,0);
  drawLine(0,height,0,height-depth*res,0, Math.PI/2, depth);
  r=modColor(1+r);
  g=modColor(1+g);
  b=modColor(1+b);
}
function factorial(num){
  if(num>0){
    return num+factorial(num-1);
  }
  else{
    return num;
  }
}
function drawLine(x1,y1,x2,y2, c, angle, d){
  stroke(modColor(r-depth*c),modColor(g-depth*c),modColor(b-depth*c));
  strokeWeight(d*.3);
  line(x1,y1,x2,y2);

  if(abs(c)<depth){
    d--;
    c++;
  //  console.log(c);
    //angle-=angle/depth;
    let newX2=x2+(d)*cos(angle)*res;
    let newY2=y2-(d)*sin(angle)*res;
    //console.log(c,angle,d);
    drawLine(x2,y2,newX2,newY2,c, angle+(c*res)/180*Math.PI, d);
    drawLine(x2,y2,newX2,newY2,c, angle-(c*res)/180*Math.PI, d);
  }


}
function modColor(c){
  return (255+c)%255;
}
