/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const articleThing = document.createElement("article");

    const h3Thing = document.createElement("h3");
    h3Thing.innerHTML = temple.templeName;

    const imgThing = document.createElement("img");
    imgThing.setAttribute("src", temple.imageUrl);
    imgThing.setAttribute("alt", temple.location);

    articleThing.appendChild(h3Thing);
    articleThing.appendChild(imgThing);

    templeElement.appendChild(articleThing);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  templeList = await response.json();
  if (response.ok) {
    displayTemples(templeList);
  } else {
    console.log("Data access error");
  }
};

/* reset Function */
const reset = () => {
  templeElement.innerHTML = "";
};

/* sortBy Function */
function sortBy(temples) {
  reset();
  const filter = document.querySelector("#sortBy").value;
  switch (filter) {
    case "utah":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;
    case "notutah":
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      displayTemples(
        temples.filter(
          (temple) => new Date(1950, 0, 1) > new Date(temple.dedicated)
        )
      );
      break;
    case "all":
      displayTemples(temples);
      break;
  }
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

getTemples();
