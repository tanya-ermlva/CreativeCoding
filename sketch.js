
const bgColor = 245;

function setup() {
    createCanvas(670, 934);
    background(bgColor);
    displayArcArray(width/5, height/1.4, 8, 400);
};

const displayArcArray = (centerX, centerY, number, inArcSize) => {
        let arcSize = inArcSize;
        const gap = 1;
        let sWeight = 10;
        let startAngle = radians(0);
        let endAngle = radians(360);

    for (let i = 0; i < number; i += 1) {

        sWeight = 2 * sWeight;

        arcSize = arcSize + (sWeight) + gap; 
        startAngle += radians(12);

        noFill();
        stroke(0, 0, 0);
        strokeCap(SQUARE);
        strokeWeight(sWeight);
        // setLineDash([1000, 1000, 500, 300]);
        console.log(`weight ${sWeight}`);
        arc(centerX, centerY, arcSize, arcSize, startAngle, endAngle);
        stroke(bgColor);
        strokeWeight(1);
        circle(centerX, centerY, arcSize, arcSize);
  }
};

function draw() {
    
    
};

function setLineDash(list) {
    drawingContext.setLineDash(list);
  }





