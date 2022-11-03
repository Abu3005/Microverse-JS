function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let positionA = [];
    let positionO = [];
    let counterA = 0;
    let counterO = 0;
    for (let i = 0; i < apples.length; i ++) {
        positionA[i] = apples[i] + a;
        }
    for (let i = 0; i < oranges.length; i ++) {
        positionO[i] = oranges[i] + b;
        }
    for (let i = 0; i < positionA.length; i ++) {
        if(positionA[i] >= s && positionA[i] <= t){
            counterA ++
            }
        }
    for(let i = 0; i < positionO.length; i ++) {
        if(positionO[i] >= s && positionO[i] <= t) {
            counterO++
            }
        }
        console.log(counterA);
        console.log(counterO);
}