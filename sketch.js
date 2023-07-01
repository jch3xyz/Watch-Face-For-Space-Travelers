let hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let currentTime;
let v0, executed0=true;
let v1, executed1=true;
let v2, executed2=true;
let v3, executed3=true;
let v4, executed4=true;
let v5, executed5=true;
let v6, executed6=true;
let v7, executed7=true;
let v8, executed8=true;
let v9, executed9=true;
let vA, executedA=true;
let vB, executedB=true;
let vC, executedC=true;
let vD, executedD=true;
let vE, executedE=true;
let vF, executedF=true;
let index = [];
let proxy;

function setup() {
  createCanvas(600, 600);
  frameRate(1);
  
  //callibrate initial time
  currentTime = (((13.8*10**9) + year())*365*24*60*60) + (((month()*30.437) + day())*24*60*60) + (hour()*60*60) + (minute()*60) + second();
  
  proxy = currentTime;
  
  for(let i=16; i>0; i--){
    index.push(Math.floor(proxy/(16**i)));
    proxy = proxy % (16**i);
  }
  //console.log(indexes);
  
  v0 = index[0];
  v1 = index[1];
  v2 = index[2];
  v3 = index[3];
  v4 = index[4];
  v5 = index[5];
  v6 = index[6];
  v7 = index[7];
  v8 = index[8];
  v9 = index[9];
  vA = index[10];
  vB = index[11];
  vC = index[12];
  vD = index[13];
  vE = index[14];
  vF = index[15];
   
}

function draw() {
  background(0);
  
  
  let secsPassed = (hour()*60*60) + (minute()*60) + second();
  let daysPassed = (month()*30.437) + day();
  
  let dayAngle = daysPassed * (TWO_PI/365);
  let secAngle = secsPassed * (TWO_PI/(24*60*60));
  
  //console.log(secAngle);
  
  let sunD = 300;
  let earthD = 75;
  
  //console.log(daysPassed, month(), day());
  
  translate(width/2, height/2);
  
  noStroke();
  fill(255,100,0,200);
  arc(0,0,sunD+earthD,sunD+earthD, 0, dayAngle, PIE);
  
  //Sun
  fill(255,200,0);
  noStroke();
  circle(0,0,sunD);
  
  
  //Earth
  push();
  
  translate(p5.Vector.fromAngle(dayAngle,sunD/1.5));
  
  fill(0,50,255);
  noStroke();
  circle(0,0,earthD);
  
  //fraction representation
  fill(0,255,0);
  arc(0,0,earthD-20,earthD-20, 0, secAngle, PIE);
  
  pop();
  
  //time
  vF = (Math.floor(millis()/1000) + index[15]) % 16;
  
  if (vF == 15) executedE=false;
  if (vF == 0 && !executedE) {vE = (vE+1) % 16; executedE=true;}

  if (vE == 15) executedD=false;
  if (vE == 0 && !executedD) {vD = (vD+1) % 16; executedD=true;}
  
  if (vD == 15) executedC=false;
  if (vD == 0 && !executedC) {vC = (vC+1) % 16; executedC=true;}
  
  if (vC == 15) executedB=false;
  if (vC == 0 && !executedB) {vB = (vB+1) % 16; executedB=true;}
  
  if (vB == 15) executedA=false;
  if (vB == 0 && !executedA) {vA = (vA+1) % 16; executedA=true;}
  
  if (vA == 15) executed9=false;
  if (vA == 0 && !executed9) {v9 = (v9+1) % 16; executed9=true;}
  
  if (v9 == 15) executed8=false;
  if (v9 == 0 && !executed8) {v8 = (v8+1) % 16; executed8=true;}
  
  if (v8 == 15) executed7=false;
  if (v8 == 0 && !executed7) {v7 = (v7+1) % 16; executed7=true;}
  
  if (v7 == 15) executed6=false;
  if (v7 == 0 && !executed6) {v6 = (v6+1) % 16; executed6=true;}
  
  if (v6 == 15) executed5=false;
  if (v6 == 0 && !executed5) {v5 = (v5+1) % 16; executed5=true;}
  
  if (v5 == 15) executed4=false;
  if (v5 == 0 && !executed4) {v4 = (v4+1) % 16; executed4=true;}
  
  if (v4 == 15) executed3=false;
  if (v4 == 0 && !executed3) {v3 = (v3+1) % 16; executed3=true;}
  
  if (v3 == 15) executed2=false;
  if (v3 == 0 && !executed2) {v2 = (v2+1) % 16; executed2=true;}
  
  if (v2 == 15) executed1=false;
  if (v2 == 0 && !executed1) {v1 = (v1+1) % 16; executed1=true;}
  
  if (v1 == 15) executed0=false;
  if (v1 == 0 && !executed0) {v0 = (v0+1) % 16; executed0=true;}
 
  
  let theTime = `${hex[v0]}${hex[v1]}:${hex[v2]}${hex[v3]}:${hex[v4]}${hex[v5]}:${hex[v6]}${hex[v7]}:${hex[v8]}${hex[v9]}:${hex[vA]}${hex[vB]}:${hex[vC]}${hex[vD]}:${hex[vE]}${hex[vF]}`;
  
  
  stroke(255);
  strokeWeight(6);
  textAlign(CENTER);
  textSize(20);
  textFont();
  text(theTime, 0, 0);

}



