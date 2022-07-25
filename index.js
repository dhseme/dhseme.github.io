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
  document.getElementById("menu-" + activePage).classList.remove("active");
  document.getElementById("menu-" + nextPage).classList.add("active");
  activePage = nextPage;
}

function intiEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.id.substring(5);
        console.warn("click pe menu", id);
        showPage(id);
      }
    });
}

showPage(activePage);
intiEvents();
