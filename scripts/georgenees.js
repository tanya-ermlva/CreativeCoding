const bgColor = 245;


function setup() {
    createCanvas(680, 880);
    // background(bgColor);
    noFill();
    stroke('black');
    strokeWeight(2);
    rectMode(CENTER);
    angleMode(DEGREES);
    // squaresGrid();
    frameRate(8);
    background(bgColor);
    

};

function draw() {
    background(bgColor);
    squaresGrid();

    

};

const squaresGrid = () => {
    const margin = 30;
    const sWidth = 45;
    
    let chaosFactorRotation = map(mouseX, 0, width, 0, 0.3);
    let chaosFactorDisplacement = map(mouseX, 0, width, 0, 5);
    

    for (let sX = sWidth/2 + margin; sX <= width - margin; sX += sWidth) {
        
        for (let sY = sWidth/2 + margin; sY <= height - margin; sY += sWidth) {
  
            let angle = map(sY, 0, height, random(0, 1), random(10, 360));
            let direction = random([-1, 1]); 

            angle *= direction * chaosFactorRotation;
            
            let offsetY = map(sY, 0, height, 0, 4) * chaosFactorDisplacement * direction;
            let offsetX = map(sY, 0, height, 0, 4) * chaosFactorDisplacement * direction;


            console.log(`this is the current Y ${sY}`);
            console.log(`this is the angle  ${angle}`);

            push();
            
            translate(sX + offsetX, sY + offsetY);
            
            rotate(angle);
            
            rect(0, 0, sWidth);

            pop();
            
        } 
    };


};