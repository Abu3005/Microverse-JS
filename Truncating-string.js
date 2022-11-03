function truncateString(str, num) {
    let output = "";
    let a = "";
    if (num < str.length) {
      output = str.substring(0, num) + "...";
    }
    if (num > str.length || num == str.length) output = str
    return output;
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));