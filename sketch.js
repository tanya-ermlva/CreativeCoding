

function setup() {
    createCanvas(670, 934);
    background(245);
    displayArcArray(width/5, height/2, 10, 400);
};

const displayArcArray = (centerX, centerY, number, inArcSize) => {
        let arcSize = inArcSize;
        const gap = 1;

    for (let i = 0; i < number; i += 1) {

        let sWeight = 10 + i * 10;
        let startAngle = radians(0);

        arcSize = arcSize + gap + (sWeight * 2 - 8);

        noFill();
        stroke(0, 0, 0);
        strokeCap(SQUARE);
        strokeWeight(sWeight);
        setLineDash([500, 300, 200, 200]);
        console.log(`weight ${sWeight}`);
        arc(centerX, centerY, arcSize, arcSize, startAngle, radians(360));

        
        
  }
};

function draw() {
    
    
};

function setLineDash(list) {
    drawingContext.setLineDash(list);
  }





