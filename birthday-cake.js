/*function birthdayCakeCandles(candles) {
    for (let i = 0; i < candles.length; i++) {

    }

}
birthdayCakeCandles([3, 2, 5, 3, 1]);*/
function birthdayCakeCandles(candles) {
    var max_candles = Math.max(...candles) 
    var number_candles = 0;
    for(var i=0; i < candles.length; i++){
        if(candles[i] == max_candles){
            number_candles += 1   ;
        }
    }
    return number_candles;
}
console.log(birthdayCakeCandles([3, 2, 1, 3]))


/*function birthdayCakeCandles(arr) {
    // Step 1
    let max = 0;
    let counter = 1;
    // Step 2 (a)
    arr.forEach(item => {
        // Step 3
        if (item > max) {
            // Step 4
            max = item;
            counter = 1;
            // Step 2 (b)
        } else if (item === max) {
            counter++;
        }
    });

    return counter;
}
console.log(birthdayCakeCandles([3, 2, 5, 3, 1]))*/