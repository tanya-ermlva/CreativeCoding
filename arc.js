const bgColor = 245;

function setup() {
    createCanvas(670, 934);
    background(bgColor);
    
    // drawArcSegment(centerX, centerY, radius, thickness, startAngle, endAngle);
    
    const centerX = 200;
    const centerY = 700;
    let radius = 200;
    let thickness = 7;
    // let startAngle = radians(270);
    // let endAngle = radians(360);
    let numArcs = 7;
    let arcLength = radians(random(0, 180));
    
    drawArcs(centerX, centerY, numArcs, radius, thickness, arcLength);

};

const drawArcs = (centerX, centerY, numArcs, radius, thickness, arcLength) => {
    let startAngle = radians(340);
    for (let i = 0; i < numArcs; i += 1) {
        drawArcSegment(centerX, centerY, radius, thickness, startAngle, startAngle + arcLength);
        thickness += thickness; 
        radius += thickness/2 + 2;
        arcLength = 0.9 * arcLength;
        startAngle -= radians(random(0, 60));
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