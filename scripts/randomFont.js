const bgColor = 245;
const inputString = 'Hello, Sergey!';
const blue = [42, 123, 166];
const black = [18, 29, 31];

// bg colors
const pink = [240, 124, 161];
const darkBlue = [12, 77, 79];
const green = [18, 74, 29];
const beige = [174, 166, 143];
const red = [230, 44, 40];
const transparent = [0, 0, 0, 0];

// font colors
const lightBeige = [244, 232, 198];
const grey = [207, 205, 198];
const brown = [179, 127, 76];
const gold = [193, 179, 90];



let fontArray = ['DM Sans', 'DM Serif Display', 'Jost', 'Anton'];
// let weightArray = [100, 400, 500, 700, 800, 900];

const colorArrayBg = [pink, red, darkBlue, green, beige];
const colorArrayFonts = [lightBeige, grey, brown, gold, pink];

function setup() {
    createCanvas(680, 880);
    // background(bgColor);
    
    angleMode(DEGREES);
    frameRate(10);
    background(bgColor);
    textSize(100);
    // splitText(inputString);
    rectMode(CENTER);
};

function draw() {
    background(bgColor);
    splitText(inputString);
    
};

const splitText = (textInput) => {
    const charArray = [];
    let textX = 20;
    const textY = 20;
    // let textWidth = 20;
    // const gap = textWidth/3;
    
    for (let i = 0; i < textInput.length; i += 1) {
        let randomColorBgIndex = floor(random(0, colorArrayBg.length));
        let randomColorFontIndex = floor(random(0, colorArrayFonts.length));
        let randomFontIndex = floor(random(0, fontArray.length));
        // let randomWeightIndex = floor(random(0, weightArray.length));

        let angle = random(0, 2);
        let direction = random([-1, 1]);

        // fill('white');
        // noStroke();
        // rect(textX-gap/2, textY, textWidth-gap, textWidth-gap);

        if (textInput[i] === ' ') {
            fill(transparent);
            text(textInput[i], 0, textY * 4.5);
            let spaceWidth = textWidth(' ');
            textX += spaceWidth;

        } else {

        push();
            
        translate(textX, textY);
        angle *= direction;
            
        rotate(angle);

        let charWidth = textWidth(textInput[i]);
        let charHeight = textAscent() + textDescent();

        
        noStroke();
        fill(colorArrayBg[randomColorBgIndex]); 
        rect(charWidth / 2, charHeight / 2, charWidth, charHeight);


        fill(colorArrayFonts[randomColorFontIndex]);
        // textStyle(weightArray[randomWeightIndex]);
        textFont(fontArray[randomFontIndex]);

       
        text(textInput[i], 0, textY * 4.5);
        console.log(textX, textY);

        

       
        textX += charWidth;
        

        // text(textInput[i], textX, textY + floor(random(0, 3)), textWidth);
        // textX += textWidth;
        
        pop();
        }
       
    }

}
