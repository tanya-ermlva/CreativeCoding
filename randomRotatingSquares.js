const bgColor = 245;


function setup() {
    createCanvas(680, 1250);
    // background(bgColor);
    noFill();
    stroke('black');
    rectMode(CENTER);
    angleMode(DEGREES);
    // squaresGrid();
    frameRate(10);
};

function draw() {
    background(bgColor);
    squaresGrid();

    

};

const squaresGrid = () => {
    const margin = 30;
    const sWidth = 60;
    
    let sX = sWidth/2 + margin;
    // let angle = 10;
    // Remap mouseX from [0, 100] to [0, 255]
    
    

    // for (let sX = sWidth/2 + margin; sX <= width - margin; sX += sWidth) {
    //     for (let sY = sWidth/2 + margin; sY <= height; sY += sWidth) {
    //         rect(sX, sY, sWidth);
            
    //     }
    // };

    for (let sX = sWidth/2 + margin; sX <= width - margin; sX += sWidth) {
        
        for (let sY = sWidth/2 + margin; sY <= height; sY += sWidth) {
            
  
            let angle = map(sY, 0, height, 0, random(45, 90));

            // Randomly decide if the rotation should be clockwise or counterclockwise
            let direction = random([-1, 1]); 
            
            // Apply the direction to the angle
            angle *= direction;

            
            console.log(`this is the current Y ${sY}`);
            console.log(`this is the angle  ${angle}`);

            push();
            
            translate(sX, sY);
            
            rotate(angle);
            
            rect(0, 0, sWidth);

            pop();
            
        } 
    };


};