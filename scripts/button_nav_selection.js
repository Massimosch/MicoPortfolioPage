/*
    This script handles the navigation selection between the main content buttons.
*/

const ContentNames =
[
    "projects",
    "skills"
];

const TextAreaMinHeightExtended = "200px";
const TextAreaMinHeightClosed = "0px";

let IncludeText = [];
let lastButtonIndex = -1;

/* Adds the included text data into the array of text. */
for(let i = 0; i < ContentNames.length; ++i)
{
    IncludeText.push("");
    fetch("./Data/pages/" + ContentNames[i] + ".html")
    .then( r => r.text() )
    .then( t => IncludeText[i] = t )
}

/* Clears the project/career detail area below the selection area. */
function clearDetailArea()
{
    let detailArea = document.getElementById("project_data_area");
    detailArea.innerHTML = "";
    detailArea.style.opacity = 0;
}

/* Called when the DOM content is loaded. */
document.addEventListener('DOMContentLoaded', function()
{
    let textArea = document.getElementById("data_selection_area");

    for (let i = 0; i < ContentNames.length; ++i)
    {
        let button = document.getElementById(ContentNames[i] + "-Button");

        button.addEventListener("click", function()
        {
            clearDetailArea();

            if (i != lastButtonIndex) /* Case: open this section */
            {
                textArea.innerHTML = IncludeText[i];
                textArea.style.opacity = 1;
                textArea.style.minHeight = TextAreaMinHeightExtended;
                lastButtonIndex = i;
            }
            else /* Case: clicked the open section again, close it */
            {
                textArea.innerHTML = "";
                textArea.style.opacity = 0;
                textArea.style.minHeight = TextAreaMinHeightClosed;
                lastButtonIndex = -1;
            }
        });
    }
});
