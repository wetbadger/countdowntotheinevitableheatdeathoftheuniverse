/*
*  If you're reading this, I'm probably dead.
*  That's ok.
*  This is the ancient language of JavaScript.
*  This is what was used before everybody switched to the better thing.
*  Please maintain this code, oh descendants of man.
*/

//retrive the elements
const galactic_years_element = document.getElementById("galactic_years");
const galactic_unit_element = document.getElementById("galactic_unit");
const millenia_element = document.getElementById("millenia");
const year_element = document.getElementById("years");
const day_element = document.getElementById("days");
const hour_element = document.getElementById("hours");
const minute_element = document.getElementById("minutes");
const second_element = document.getElementById("seconds");

var galactic_year;
var millenium;
var year;
var day;
var hour;
var minute;
var second;

var count = 0; 
var T = 17;
var t;

function resetAll(n) {
  
  galactic_year = n / BigInt(24 * 3600 * 365.2425 * 1000 * 230000);
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

  // In the english language in the 21st earth centry, letter are added to the end of words when there are more than one of them
  s = (second == 1) ? "" : "s"; 
  m = (minute == 1) ? "" : "s"; 
  h = (hour == 1) ? "" : "s"; 
  d = (day == 1) ? "" : "s"; 
  y = (year == 1) ? "" : "s"; 
  m2 = (millenium == 1) ? "um" : "a";
  g = (galactic_year == 1) ? "" : "s";

  // This element must be done differently so the words can wrap nicely
  galactic_years_element.innerHTML = galactic_year.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
  galactic_unit_element.innerHTML = "galactic year" + g + ", ";

  millenia_element.innerHTML = millenium.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " milleni" + m2 + ", ";
  
  year_element.innerHTML = year + " year" + y + ", ";

  day_element.innerHTML = day + " day" + d + ", ";

  hour_element.innerHTML = hour + " hour" + h + ", ";

  minute_element.innerHTML = minute + " minute" + m + ", ";

  second_element.innerHTML = "and " + second + " second" + s + " until the end of the universe.";

}

function decrementTimer() {
  count ++;
  second--;
  second = (second%BigInt(60) + BigInt(60))%BigInt(60);
  s = (second == 1) ? "" : "s"; 
  second_element.innerHTML = "and " + second + " second" + s + " until the end of the universe.";
  
  if (count == T) {
    // resync user system time every time the seconds roll over
    // this is because, in our time, computers are not accurate
    // in addition counting leapseconds and leapyears is quite difficult
    // so we let the system clock deal with it
    count = 0;
    let thing = new Date();
    now = Math.round(thing.getTime() / 1000);
    resetAll(end_of_universe - BigInt(now));
    clearInterval(t);
    t = setInterval(decrementTimer,1000);
  }  
}

// this will take a 41 bit time from the client computer that we 
// will shave the milliseconds off of because we dont need them.
// TODO: this will break in 2038. plz replace with whatever ya'll are using then
let thing = new Date();
var now = Math.round(thing.getTime() / 1000)
let end_of_universe = BigInt(2)**BigInt(512)-BigInt(1)

resetAll(end_of_universe - BigInt(now));

//every second update the time we have left
t = setInterval(decrementTimer, 1000);
