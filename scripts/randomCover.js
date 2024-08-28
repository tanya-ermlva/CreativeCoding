const bgColor = [234, 223, 195];
const diameter = 35;
let gap = diameter/8;

const blue = [42, 123, 166];
const red = [226, 25, 45];
const black = [18, 29, 31];
const transparent = [0, 0, 0, 0];

function setup() {
    createCanvas(diameter * 20, diameter * 20);
    background(bgColor);
    angleMode(DEGREES);
    frameRate(2);
    noStroke();

    // rectMode(CENTER);
    // createCircleGrid(50, 100, blue, black);
    // createCircleGrid(100, 100, red, bgColor);
    // blendMode(MULTIPLY);
    

    // createRecGrid(24, red, bgColor);
    
    // createCircleGrid(100, 100, red, bgColor);

};

function draw() {
    // background(bgColor);
    createRecGridCentral(red, bgColor);
   
    createCircleGrid(50, 100, bgColor, black);
    createCircleGrid(34, 13, blue, black);
  
};

const createCircleGrid = (index1, index2, color1, color2) => {
    

    let i = 0;

    for (let x = 0 + diameter; x < width; x += diameter + gap) {
        for (let y = 0 + diameter; y < height; y += diameter + gap) {
            let randomIndex1 = floor(random(1, index1));
            let randomIndex2 = floor(random(1, index2));
            console.log(x);
            i += 1;
            if (i % randomIndex1 === 0) {
                fill(color1);
            } else if (i % randomIndex2 === 0) {
                fill(color2);
            } else {
                fill(bgColor);
            }
            ellipse(x, y, diameter);
        }
    }
}

const createRecGrid = (index1, color1, color2) => {
    let i = 0;
    
    for (let x = 0 + diameter; x < width - diameter; x += diameter + gap) {
        for (let y = 0 + diameter; y < height - diameter; y += diameter + gap) {
            let randomIndex1 = floor(random(1, index1));
            i += 1;
            if (i % randomIndex1 === 0) {
                fill(color1);
            } else {
                fill(color2);
            }
            rect(x, y, diameter + gap);
    }
} 
}

const createRecGridCentral = (color1, color2) => {
    let centerX = width / 2;
    let centerY = height / 2;
    let maxDistance = dist(0, 0, centerX, centerY);
    for (let x = 0 + diameter; x < width - diameter; x += diameter + gap) {
        for (let y = 0 + diameter; y < height - diameter; y += diameter + gap) {
            let distance = dist(x, y, centerX, centerY); // Distance from the center
            let probability = map(distance, 0, maxDistance, 0.5, 0); // Map distance to probability (center = 1, edges = 0)

            if (random(1) < probability) {
                fill(color1); // More likely to be red near the center
            } else {
                fill(color2); // More likely to be bg color as you move outwards
            }
            rect(x, y, diameter + gap, diameter + gap);
        }
    }
}