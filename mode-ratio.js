function plusMinus(arr) {
    let count = 0;
    let great = 0;
    let less = 0;
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] == 0) {
            //console.log(count)
            count++
        }
        
        if (arr[i] > 0) {
            //output *= (count / ar.length);
            great++;
        }
        if (arr[i] < 0) {
            //output *= (count / ar.length);
            less++;
            
        }
    }
    return ((great / arr.length).toFixed(6) + "\r\n" + (less / arr.length).toFixed(6) + "\r\n" + (count  / arr.length).toFixed(6));
} //toFixed is d number of decimal e.g d above is 6decimal place
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))