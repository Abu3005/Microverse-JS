function string(str, n){
    let newString = "";
    for (i = 0; i < n; i++){
        newString += str[i];
    }
    return newString;
}
console.log(string("Hello guy how are u", 5));