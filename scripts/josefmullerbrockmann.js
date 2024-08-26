const bgColor = 245;

function setup() {
    createCanvas(670, 934);
    background(bgColor);
    
    // drawArcSegment(centerX, centerY, radius, thickness, startAngle, endAngle);
    
    const centerX = 200;
    const centerY = 650;
    let radius = 250;
    let thickness = 8;
    // let startAngle = radians(270);
    // let endAngle = radians(360);
    let numArcs = 7;
    let arcLength = radians(60);
    
    drawArcs(centerX, centerY, numArcs, radius, thickness, arcLength);

};

const drawArcs = (centerX, centerY, numArcs, radius, thickness, arcLength) => {
    let startAngle = radians(340);
    for (let i = 0; i < numArcs; i += 1) {
        
        drawArcSegment(centerX, centerY, radius, thickness, startAngle, startAngle + arcLength);
        
        radius += thickness + 2;
        thickness += thickness; 

        // arcLength = arcLength;
        startAngle -= radians(22);

        if (i === 2){
            arcLength =  0.78 * (i+2) * arcLength;
        }

        if (i === 3) {
            startAngle += radians(55);
        }
    }
};


const drawArcSegment = (centerX, centerY, radius, thickness, startAngle, endAngle) => {
    beginShape(QUAD_STRIP);
    
    for (let t = 0; t <= 1; t += 0.0001) {

      let angle = lerp(startAngle, endAngle, t);
      
      // Inner vertex of the quad strip
      vertex(
        centerX + radius * cos(angle),
        centerY + radius * sin(angle)
      );
      
      // Outer vertex of the quad strip
      vertex(
        centerX + (radius + thickness) * cos(angle),
        centerY + (radius + thickness) * sin(angle)
      );
    }
    
    endShape();
  }

  function draw() {
    
    
  };