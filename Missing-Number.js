for(let i = 0; i < array1.length; i++) {
    let count = numHash1.get(array1[i]);
    if(!count) {
        numHash1.set(array1[i], 1);
    } else {
        numHash1.set(array1[i], count + 1);
    }
}
for(let i = 0; i < array2.length; i++) {
    let count = numHash2.get(array2[i]);
    if(!count) {
        numHash2.set(array2[i], 1);
    } else {
        numHash2.set(array2[i], count + 1);
    }
}
let missingNumbers = [];
for(let key of numHash2.keys()) {
    let countB = numHash2.get(key);
    if(!numHash1.get(key) || countB > numHash1.get(key)) {
        missingNumbers.push(key);
    }
}