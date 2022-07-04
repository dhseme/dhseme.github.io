console.info(2);
console.debug(2 + 2);
console.warn(6 * 3 - 10);
console.error("started");

var age = 18;
var myName = "Mihai";

console.info(" My name is " + myName + ", I'm " + age + " years old.");
age = 19;
console.info(" My name is " + myName + ", I'm " + age + " years old.");
age = 20;
console.info(" My name is " + myName + ", I'm " + age + " years old.");

var jobTitle = "<span>Elev</span> fastTrackIT";

var mottoElement = document.getElementById("motto");

console.info(mottoElement);
console.warn(mottoElement.innerHTML);

mottoElement.innerHTML = mottoElement.innerHTML + " and " + jobTitle;
//mottoElement.innerHTML += " and " + jobTitle;
