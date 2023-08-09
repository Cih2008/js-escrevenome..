function setup() {
    createCanvas(600, 600);
    background("pink");
  }
  
  function draw() {
    
    
    stroke("pink")
    fill("blue");
    
    //console.log(moueIspressed);
    
    if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
      
  }
  }