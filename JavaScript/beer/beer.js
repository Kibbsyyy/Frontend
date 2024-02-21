 function beer() {
    for(count = 99; count > 0; count--){
        var minusOne = count - 1;
        console.log(`${count} bottles on the wall. ${count} bottles of beer.\nTake down one and pass it around, ${minusOne} bottles on the wall`)
    } if(count === 1) {
        console.log(`${count} bottle on the wall. ${count} bottle of beer.\nTake down one and pass it around, no bottle on the wall`)
    } else {
        console.log(`No bottle on the wall. No bottle of beer.\nTake down one and pass it around, 99 bottles on the wall`)
    }
}

// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }