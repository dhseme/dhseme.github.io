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

function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

var activePage = "skills";

function showPage(nextPage) {
  console.warn("change", activePage, "to", nextPage);
  hide(activePage);
  show(nextPage);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");
  activePage = nextPage;
}

function intiEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        console.warn("click pe menu", id);
        showPage(id);
      }
    });
}

showPage(activePage);
intiEvents();

function displaySkills(skills) {
  var ul = document.querySelector("#skills ul");
  skills.sort(function (a, b) {
    return b.endorcements - a.endorcements;
    // return b.endorcements - a.endorcements;
  });
  console.info(skills);
  for (var i = 0; i < skills.length; i - i++) {
    ul.innerHTML += `<li>${skills[i].name} - ${skills[i].endorcements}</li>`;
  }
}

function loadSkills() {
  fetch("skills.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (skills) {
      console.warn("am primit ceva ori nu", skills);
      displaySkills(skills);
    });
}
loadSkills();
