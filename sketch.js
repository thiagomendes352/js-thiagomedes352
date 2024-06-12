function setup() {
    createCanvas(600, 600);
    background("black")
  }
  
  function draw() {
    stroke("red");
   fill("red");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY,15,15);
    }
  }