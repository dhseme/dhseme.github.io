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

function showHomePage() {
  console.info("aib");
  document.getElementById("home").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("passions").style.display = "none";
  document.getElementById("achievements").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
}

function showSkillsPage() {
  document.getElementById("skills").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("passions").style.display = "none";
  document.getElementById("achievements").style.display = "none";
  document.getElementById("home").style.display = "none";
}
function showProjectsPage() {
  document.getElementById("projects").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("passions").style.display = "none";
  document.getElementById("achievements").style.display = "none";
  document.getElementById("languages").style.display = "none";
}
function showLanguagesPage() {
  document.getElementById("languages").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("passions").style.display = "none";
  document.getElementById("achievements").style.display = "none";
}

function showAchievementsPage() {
  document.getElementById("achievements").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("passions").style.display = "none";
  document.getElementById("languages").style.display = "none";
}
function showPassionsPage() {
  document.getElementById("passions").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("achievements").style.display = "none";
  document.getElementById("languages").style.display = "none";
}
showHomePage();
