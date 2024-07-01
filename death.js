/*
*  If you're reading this, I'm probably dead.
*  That's ok.
*  This is the ancient language of JavaScript.
*  This is what was used before everybody switched to the better thing.
*  Please maintain this code, oh descendants of man.
*/


//create some elements
const galacticYearElem = document.createElement("p");
const milleniumElem = document.createElement("p");
const yearElem = document.createElement("p");
const dayElem = document.createElement("p");
const hourElem = document.createElement("p");
const minuteElem = document.createElement("p");
const secondElem = document.createElement("p");

//these are specially formatted to have commas
//because they were very big numbers
const bignum1 = document.createElement("span");
bignum1.setAttribute('class', 'bignum');
const bigtext1 = document.createElement("span");
const bignum2 = document.createElement("span");
bignum2.setAttribute('class', 'bignum');
const bigtext2 = document.createElement("span");

let galacticYear;
let millenium;
let year;
let day;
let hour;
let minute;
let second;

function formatTime(n) {

  //big int is a JavaScript class that allows math with arbitrarily large integers
  galacticYear = n / BigInt(24 * 3600 * 365.2425 * 1000 * 230000);
  n %= BigInt(24 * 3600 * 365.2425 * 1000 * 230000);
  millenium = n / BigInt(24 * 3600 * 365.2425 * 1000);
  n %= BigInt(24 * 3600 * 365.2425 * 1000);
  year = n / BigInt(24 * 3600 * 365.2425);
  n %= BigInt(24 * 3600 * 365.2425);
  day = n / BigInt(24 * 3600);
  n %= BigInt(24 * 3600);
  hour = n / BigInt(3600);
  n %= BigInt(3600);
  minute = n / BigInt(60) ;
  n %= BigInt(60);
  second = n;
  
  //we use an 's' after words to indicate that there are more than 1 of something 
  let s = "s";
  
  if (galacticYear == 1) {
    s = "";
  } else {
    s = "s";
  }
	
  //invisible space between numbers, allowing the big number to "wrap"
  let space = "<span class='space'> </span>";

  //create a number and some text
  let galacticYearText = document.createTextNode(galacticYear.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ")); 
  let galacticYearText2 = document.createTextNode(" galactic year" + s + ", ");

  //add the new text elements to another element
  bignum1.appendChild(galacticYearText);
  bignum1.innerHTML = bignum1.innerHTML.replace(/\s/g, space);
  bigtext1.appendChild(galacticYearText2);
  galacticYearElem.appendChild(bignum1);
  galacticYearElem.appendChild(bigtext1);
  
  
  if (millenium == 1) {
    s = "ium";
  } else {
    s = "ia";
  }
  //same as above
  let milleniumText = document.createTextNode(millenium.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", "));
  let milleniumText2 = document.createTextNode(" millen" +s+ ", ")

  bignum2.appendChild(milleniumText);
  bigtext2.appendChild(milleniumText2);
  bignum2.innerHTML = bignum2.innerHTML.replace(/\s/g, space);
  milleniumElem.appendChild(bignum2);
  milleniumElem.appendChild(bigtext2);
  

  
  if (year == 1) {
    s = "";
  } else {
    s = "s";
  }

  //these don't need commas so they are simpler
  let yearText = document.createTextNode(year + " year"+s+", ");
  yearElem.appendChild(yearText);
  
  if (day == 1) {
    s = "";
  } else {
    s = "s";
  }
  let dayText = document.createTextNode(day + " day"+s+", ");
  dayElem.appendChild(dayText);
  
  if (hour == 1) {
    s = "";
  } else {
    s = "s";
  }
  let hourText = document.createTextNode(hour + " hour"+s+", ");
  hourElem.appendChild(hourText);
  
  if (minute == 1) {
    s = "";
  } else {
    s = "s";
  }
  let minuteText = document.createTextNode(minute + " minute"+s+", ")
  minuteElem.appendChild(minuteText);
  
  if (second == 1) {
    s = "";
  } else {
    s = "s";
  }
  let secondText = document.createTextNode("and " + second + " second"+s+" until the end of the universe.");
  secondElem.appendChild(secondText);
  
}

function resetAll(n) {

  galacticYear = n / BigInt(24 * 3600 * 365.2425 * 1000 * 230000);
  n %= BigInt(24 * 3600 * 365.2425 * 1000 * 230000);
  millenium = n / BigInt(24 * 3600 * 365.2425 * 1000);
  n %= BigInt(24 * 3600 * 365.2425 * 1000);
  year = n / BigInt(24 * 3600 * 365.2425);
  n %= BigInt(24 * 3600 * 365.2425);
  day = n / BigInt(24 * 3600);
  n %= BigInt(24 * 3600);
  hour = n / BigInt(3600);
  n %= BigInt(3600);
  minute = n / BigInt(60) ;
  n %= BigInt(60);
  second = n;

  if (second == 1) {
    s = "";
  } else {
    s = "s";
  }

    if (minute == 1) {
      m = "";
    } else {
      m = "s";
    }


    if (hour == 1) {
      h = "";
    } else {
      h = "s";
    }


    if (day == 1) {
      d = "";
    } else {
      d = "s";
    }


    if (year == 1) {
      y = "";
    } else {
      y = "s";
    }


    if (millenium == 1) {
      m2 = "ium";
    } else {
      m2 = "ia";
    }

    if (galacticYear == 1) {
      g = "";
    } else {
      g = "s";
    }

  yearElem.innerHTML = year + " year"+y+", ";

  dayElem.innerHTML = day + " day"+d+", ";

  hourElem.innerHTML = hour + " hour"+h+", ";

  minuteElem.innerHTML = minute + " minute"+m+", ";

  secondElem.innerHTML = "and " + second + " second" + s + " until the end of the universe.";
	
  let separator = ","+space;
  bignum1.innerHTML = galacticYear.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  bigtext1.innerHTML = " galactic year"+g+", ";

  bignum2.innerHTML = millenium.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  bigtext2.innerHTML = " millen"+m2+", ";

}

var count = 0; 
var T = 17;
var t;
function decrementTimer() {
  count ++ ;
  if (count == T) {
    //resync user system time every t seconds
    //this is because, in our time, computers are not accurate
    count = 0;
    now = new Date();
    now = Math.round(now.getTime() / 1000);
    resetAll(endOfUniverse - BigInt(now));
    clearInterval(t);
    t=setInterval(decrementTimer,1000);
  }
  second--;
  if (second == 1) {
    s = "";
  } else {
    s = "s";
  }
  if (second <= -1) {
    second = 59;
    minute--;
    if (minute == 1) {
      m = "";
    } else {
      m = "s";
    }
    if (minute <= -1) {
      minute = 59;
      hour--;
      if (hour == 1) {
        h = "";
      } else {
        h = "s";
      }
      if (hour <= -1) {
        day--;
        if (day == 1) {
          d = "";
        } else {
          d = "s";
        }
        if (day <= -1) {
          year--;
          if (year == 1) {
            y = "";
          } else {
            y = "s";
          }
          if (year <= -1) {
            millenium--;
            if (millenium == 1) {
              m2 = "ium";
            } else {
              m2 = "ia";
            }
            if (millenium <= -1) {
              galacticYear--;
              if (galacticYear == 1) {
                g = "";
              } else {
                g = "s";
              }
              bignum1.innerHTML = galacticYear;
              bigtext1.innerHTML = " galactic year"+g+", ";
            }
            bignum2.innerHTML = millenium;
            bigtext2.innerHTML = " millen"+m2+", ";
          }
          yearElem.innerHTML = year + " year"+y+", ";
        }
        dayElem.innerHTML = day + " day"+d+", ";
      }
      hourElem.innerHTML = hour + " hour"+h+", ";
    }
    minuteElem.innerHTML = minute + " minute"+m+", ";
  }
  secondElem.innerHTML = "and " + second + " second" + s + " until the end of the universe.";
}

//this will take a 41 bit time from the client computer that we 
//will shave the milliseconds off of because we dont need them.
//TODO: this will break in 2038. plz replace with whatever ya'll are using then
var now = new Date();
now = Math.round(now.getTime() / 1000);

let endOfUniverse = BigInt(2)**BigInt(512)-BigInt(1)

let nowElem = document.getElementById("now");

formatedTime = formatTime(endOfUniverse - BigInt(now));

//Create some text that just has the word "approximately"
let approx = document.createElement("h3");
let approxText = document.createTextNode("Approximately ")
approx.appendChild(approxText);

//add all the elements to an element in the page
nowElem.appendChild(approx);
nowElem.appendChild(galacticYearElem);
nowElem.appendChild(milleniumElem);
nowElem.appendChild(yearElem);
nowElem.appendChild(dayElem);
nowElem.appendChild(hourElem);
nowElem.appendChild(minuteElem);
nowElem.appendChild(secondElem);

//every second, update the time we have left
var t=setInterval(decrementTimer,1000);

//That's all!




