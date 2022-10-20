function hurdleRace(k, height) {
    // Write your code here
    let output;
    for (let i = 0; i < height.length; i++){
        if (k > Math.max(...height)) output = 0;
        if (Math.max(...height) > k) {
            output = Math.max(...height) - k;
        }
    }
    return output;
}
console.log(hurdleRace(4, [2, 5, 4, 5, 2]));