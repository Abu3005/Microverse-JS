function breakingRecords(scores) {
    let best;
    let worst;
    best = worst = scores.shift() //Get and remove the first element
    let recBest = 0;  //Use more descriptive names here
    let recWorst = 0; //...and here as well
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > best) {
            best = scores[i];
            recBest++;
        } else if (scores[i] < worst) {
            worst = scores[i];
            recWorst++;
        }
    }
    return [recBest, recWorst];
}

//And for one test case, I say:

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])) //[4, 0]