/*
    This script handles the content assignment of project data
*/

const ProjectNames = [
  "bitone",
  "hukkaputki",
  "project3",
  "project4",
  "project5",
  "project6"
];

let ProjectText = [];

let projTextArea = document.getElementById("project_data_area");

/* Adds the included text data into the array of text. */
for (let i = 0; i < ProjectNames.length; ++i) {
  ProjectText.push("");
  fetch("./Data/pages/projects/" + ProjectNames[i] + ".html")
    .then((r) => r.text())
    .then((t) => (ProjectText[i] = t));
}

let bLock = false;
let prevBtnIndex = -1;

function LoadProject(button, btnIndex) {
  if (button.getAttribute("class") == "proj-button-active") {
    /* case where you select the active button */
    var x = document.getElementsByClassName("proj-button-active");

    x[0].className = "proj-button";
    projTextArea.innerHTML = "";
    projTextArea.style.opacity = 0;
  } else {
    var x = document.getElementsByClassName("proj-button-active");
    if (x.length != 0) {
      /* case where another project is currently active and being displayed. */
      x[0].className = "proj-button";
      projTextArea.innerHTML = "";
      projTextArea.style.opacity = 0;
    }

    /* Set this button as the active display */
    projTextArea.innerHTML = ProjectText[btnIndex];
    projTextArea.style.opacity = 1;
    document.getElementById(button.getAttribute("id")).className =
      "proj-button-active";
  }
}
