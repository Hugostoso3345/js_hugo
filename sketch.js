function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    
    
    stroke ("red");
    fill ("white");
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect( mouseX, mouseY, 30, 45);
    }
    
  }