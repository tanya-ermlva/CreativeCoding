const bgColor = 245;
const inputString = 'Some Text';
const blue = [42, 123, 166];
const red = [226, 25, 45];
const black = [18, 29, 31];

const colorArray = [blue, red, black];

function setup() {
    createCanvas(680, 880);
    // background(bgColor);
    stroke('black');
    angleMode(DEGREES);
    frameRate(8);
    background(bgColor);
    textSize(22);
    splitText(inputString);

    

};

function draw() {
    // background(bgColor);
    
};

const splitText = (textInput) => {
    const charArray = [];
    let textX = 20;
    const textY = 50;
    let textWidth = 40;
    
    for (let i = 0; i < textInput.length; i += 1) {
        let randomIndex = floor(random(0, colorArray.length));
        fill(colorArray[randomIndex]);
        console.log(colorArray, colorArray[randomIndex]);

        text(textInput[i], textX, textY, textWidth);
        textX += textWidth;
    }

}
