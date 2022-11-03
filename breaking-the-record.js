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

// Another solution below

function breakingRecords(scores) {
    let high = scores[0];
    let low = scores[0];
    let [ max, min ] = [ 0, 0 ];
   
    for (let i = 1; i < scores.length; i ++) {
      if (scores[i] > high) {
        high = scores[i]; max++;
      }
   
      if (scores[i] < low) {
        low = scores[i]; min++;
      }
    }
  };
  

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])) //[4, 0]