function printDiamond(height) {
    // Upper half of the diamond
    for (let i = 0; i < height; i++) {
        let row = "";
        // Print spaces
        for (let j = 0; j < height - i - 1; j++) {
            row += " ";
        }
        // Print stars
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }
        console.log(row);
    }

    // Lower half of the diamond
    for (let i = height - 2; i >= 0; i--) {
        let row = "";
        // Print spaces
        for (let j = 0; j < height - i - 1; j++) {
            row += " ";
        }
        // Print stars
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }
        console.log(row);
    }
}
printDiamond(3);