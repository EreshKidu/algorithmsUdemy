
const boxes = [1, 2, 3,4,5];
const lengthOfBoxes = boxes.length;

for ( let i = 0; i < lengthOfBoxes; i++) {
    for (let j = i + 1; j <lengthOfBoxes; j++ ) {
        console.log (`${boxes[i] + ' ' + boxes[j]}`);
    }
}