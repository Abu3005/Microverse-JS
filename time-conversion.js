         /* Things to conside
 1) when it is 12am, return to 00
 2) 1am to 12pm is ok
 3) 1pm to 11pm should add 12pm*/

function timeConversion(s) {
    /*let [time, part] = [s.substring(0, s.length - 2), s.substring(s.length - 2)]
    time = time.split(":").map(Number)
    if (part === "PM" && time[0] === 12) time[0] = 12
    if (part === "PM" && time[0] !== 12) time[0] = (time[0] + 12) % 24
    if (part === "AM" && time[0] === 12) time[0] = 0
    return time
      .map(String)
      .map(s => s.padStart(2, "0"))
      .join(":")*/


      //1) get p in d time given to check d case of A and P
      //2) initialize ur output
      //3) at case of P, use parseInt() to add 12 to string 
      let output = "";
      let a = s.substring(0, 2);
      if (s[8] == "A") {   // s[8] = s.charAt(8)
        if (a = "12") output = "00";
        else output = s.substring(0, 2);
      }
      else {// s[8] = "P"
        if (a == "12") output = s.substring(0, 2);
        else output = parseInt(s.substring(0, 2), 10) + 12;
      }
      return output + s.substring(2, 8);
  }
  console.log(timeConversion("07:05:45PM"));

  // ans = 19:05:45