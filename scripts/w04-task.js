/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Beau Travis",
  photo: "images\\me.jpg",
  favoriteFoods: [
    "Peaches and Cream",
    "Ribeye",
    "Sushi",
    "Raspberry Almond Cake",
    "Roasted Parsnips",
  ],
  hobbies: [
    "Tinkering",
    "Watching shows",
    "PC gaming",
    "Board gaming",
    "Camping",
    "4 wheeling",
  ],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: "California",
    length: "10+ years",
  },
  {
    place: "England",
    length: "2 years",
  },
  {
    place: "Oregon",
    length: "<1 year",
  },
  {
    place: "Minnesota",
    length: "<1 year",
  },
  {
    place: "N Dakota",
    length: "<1 year",
  }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const photoElement = document.querySelector("img", myProfile.photo);
photoElement.setAttribute("src", myProfile.photo);
photoElement.setAttribute("alt", `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let ul = document.createElement("ul");
  ul.textContent = hobby;
  document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((placelived) => {
  let dt = document.createElement("dt");
  let dd = document.createElement("dd");
  dt.textContent = placelived.place;
  dd.textContent = placelived.length;
  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});
