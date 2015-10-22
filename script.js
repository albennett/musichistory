


/*Use JavaScript arrays, loops, and innerHTML to show the music you love.

Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the songs.js file, which contains an array of strings with song information.

Each student must add one song to the beginning and the end of the array.
Loop over the array and remove any words or characters that obviously don't belong.
Students must find and replace the > character in each item with a - character.
Must add each string to the DOM in index.html in the main content area.*/

var songs = [];
var newSongs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";



songs.push("If it Takes a Lifetime > by Jason Isbell on the album Something More than Free")
songs.unshift("Stronger Than That > by Bahamas on the album Bahamas is Afie")

var addInput = document.getElementById("add-input");
console.log(addInput);

addInput.addEventListener("click", getInputs)

function getInputs () {
	var songInput = document.getElementById("song-input").value;
	var albumInput = document.getElementById("album-input").value;
	var artistInput = document.getElementById("artist-input").value;
	
	document.getElementById("article-songs").innerHTML += "<p>" + songInput + " by " + artistInput + " on the album " + albumInput + "</p>"
	console.log("hey, here are your songs: ",  songs);
}

for (var i = 0; i < songs.length; i++) {
	song = songs[i];
	song = song.replace(">", "-");
	song = song.replace("*","");
	song = song.replace("@","" );
	song = song.replace("(","" );
	song = song.replace("!","" );

console.log(song);

var songName = song.slice(0, song.indexOf("-")-1);
console.log("songname", songName);
var artistName = song.slice(song.indexOf("by")+2, song.indexOf("on the album"));
console.log("artistname", artistName);
var albumName = song.slice(song.indexOf("album")+6);
console.log("albumname", albumName);


newSongs[i] = "<p>" + songName + " by" + artistName + "on the album " + albumName + "</p>";
}

for (var j = 0; j < newSongs.length; j++) {
	document.getElementById("article-songs").innerHTML += newSongs[j];
}



/*SINGLE PAGE APPLICATION*/

////////////HOME//////////////////
var homeLink = document.getElementById("nav-home");
var leftView = document.getElementById("leftside-form");
var addMusic = document.getElementById("textbox");

homeLink.addEventListener("click", function() {
  leftView.classList.add("visible");
  leftView.classList.remove("hidden");
  rightView.classList.remove("hidden");
  rightView.classList.add("visible");
  addMusic.classList.add("hidden");
  addMusic.classList.remove("visible");

});

//////////////ADD////////////////
var addLink = document.getElementById("nav-add");
var rightView = document.getElementById("rightside-form");


addLink.addEventListener("click", function() {
	leftView.classList.remove("visible");
	leftView.classList.add("hidden");
	rightView.classList.remove("visible");
	rightView.classList.add("hidden");
	addMusic.classList.remove("hidden");
	addMusic.classList.add("visible");
});

/////////LISTMUSIC/////////////////
var listLink = document.getElementById("nav-list");
var rightView = document.getElementById("rightside-form");

listLink.addEventListener("click", function() {
	  leftView.classList.add("visible");
	  leftView.classList.remove("hidden");
	  rightView.classList.remove("hidden");
	  rightView.classList.add("visible");
	  addMusic.classList.add("hidden");
	  addMusic.classList.remove("visible");
});

//Once the user fills out the song form and clicks the add button, you should collect all values from
// the input fields, add the song to your array of songs, and update the song list in the DOM.

/*var addInput = document.getElementById("add-input");

addInput.addEventListener("click", getInputs)

function getInputs () {
	var songInput = document.getElementById("song-input").value;
	var albumInput = document.getElementById("album-input").value;
	var artistInput = document.getElementById("artist-input").value;
	songs.push("<p>" + songInput + "by" + artistInput + "on the album" + albumInput + "</p>")
} */

//newSongs[i] = "<p>" + songName + " by" + artistName + "on the album " + albumName + "</p>";












//sonnetElement.innerHTML = sonnetText.replace(/the/g, "a large");  //g means global replace


//push = adds to end of array
//unshift = adds to beg of array
//












/*
  1. Take the contents of the sonnet div and place it in a variable
  2. Find and output the starting position of the word "orphans"
  3. Output the number of characters in the sonnet
  4. Replace the first occurance of the string "winter" with "yuletide"
  5. Replace all occurances of the string "the" with "a large"
  6. Set the content of the sonnet div with the new string
*/


/*var sonnetElement = document.getElementById("sonnet");
var sonnetText = sonnetElement.innerHTML;
console.log("sonnetText", sonnetText);

var indexOfOrphans = sonnetText.indexOf("orphans");
console.log("indexOfOrphans", indexOfOrphans);
console.log("length of sonnet", sonnetText.length)

sonnetElement.innerHTML = sonnetText.replace("winter", "yuletide");
sonnetElement.innerHTML = sonnetText.replace(/the/g, "a large");  //g means global replace


*/














/*var salary = 12;
var monthlySalary = salary % 12;

var isPurple = true;
console.log("isPurple", isPurple);

if (isPurple === true) {
	// When condition is true
	console.log("Is purple.");
} else {
	console.log("Is not purple.");
}


var seconds = 60;
var minute = seconds * 60;
console.log("minute", minute);
var hour = minute * 60;
console.log("hour", hour);
var day = hour * 24;
console.log("day", day);
var year = day * 365;
console.log("year", year);

var hoursInYear = year / hour;
console.log("hoursInYear", hoursInYear);
var minutesInDecade =  (year * 10) / minute;
console.log*"minutesInDecade", minutesInDecade;
var myAgeInSeconds = year * 25;
console.log("myAgeInSeconds", myAgeInSeconds);

var myAge = 25;
console.log("myAge", myAge);

var isOld = 59;
console.log("isOld", isOld);

var breakpointAge = 50;

if (myAge < isOld) {
	console.log("I am young");
} else {
	console.log("I am old");
} 


var colors = ["red", "blue", "yellow", "purple"];
var luckyNumbers = [4, 8, 15, 16, 23, 42];

for (var i = 0; i < luckyNumbers.length; i = i + 2) {
	console.log(luckyNumbers[i]);
}

//loop over colors
for (var i = 0; i < colors.length; i++) {
	console.log("current color is ", colors[i]);
}

//simple loop that increments  a value
for (var i = 10; i <= 100; i += 10) {
	console.log("plus ten", i);
}

//divide by two
for (var i = 1024; i >= 2; i = i / 2) {
	console.log("divided by two", i);
}
// add items to an array
var itemArray = [];
for (var i = 2; i <= 512; i = i * i) {
	itemArray.push(i);
} console.log("itemArray", itemArray);


var prevArray = [];
for (var x =100; x > 0; x-=1) {
	console.log("x", x);
	if (x % 2 === 0) {
		prevArray.unshift(x);
	} else {
		prevArray.push(x);
	}
} console.log("prevArray", prevArray)


//var lastItem = colors.pop(); // takes the last off the array
//console.log("lastItem", lastItem);

//colors.unshift("orange"); //adds an item to the beginning of array
//colors.shift(); // removes item from beginning


var firstName = "Steve";
var lastName = " Brownlee";
var fullName = firstName + lastName;
console.log("fullName", fullName.replace("B"));

var phrase = "The lazy dog";
var newPhrase =  phrase.replace("lazy", "bounding");
//alert(newPhrase);

var number = "1000";
var integer = parseInt(number);





var el = document.getElementById("container");
console.log("el", el);

el.innerHTML = "I like NSS";
var containerText = el.innerHTML;
console.log("containerText", containerText) 
*/





