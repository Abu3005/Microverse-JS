function translatePigLatin(str) {
    let vowels = "aeiou"
    let k;
    let l = "";
    if (vowels.includes(str[0]) === true){
      k = str + "way";
      return k;
    }
    let i = 0;
    while (vowels.includes(str[i]) === false && i < str.length){
      l += (str[i])
      i++;
    }
  
    return str.substring(i) + l + "ay";
  }
  
  translatePigLatin("glove");