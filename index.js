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

function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  hide("home");
  hide("skills");
  hide("projects");
  hide("passions");
  hide("achievements");
  hide("languages");
}
function showPage(id) {
  hideAllPages();
  show(id);
}

showPage("home");
