function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const cons = "bcdfghjklmnpqrstvwxyz";
    const stringArray = s.split('');
   
    for(let i=0; i < s.length; i++){
      for(let j=0; j < vowels.length; j++){
        if(s[i] == vowels[j]){
          console.log(s[i]);
        }
      }
    }
    for(let i=0; i < s.length; i++){
        for(let j=0; j < cons.length; j++){
          if(s[i] == cons[j]){
            console.log(s[i]);
          }
        }
      }
}
console.log(vowelsAndConsonants("javascriptloops"));