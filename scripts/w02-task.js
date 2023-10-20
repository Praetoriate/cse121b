/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Beau Travis";
let currentYear = new Date().getFullYear();
let profilePicture = "images\\me.jpg";
let foods = [
  "Peaches and Cream",
  "Ribeye",
  "Sushi",
  "Raspberry Almond Cake",
  "Roasted Parsnips",
];
let addFood = "Popcorn";
let foodString = foods.join(",");

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img", profilePicture);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);
foodElement.textContent = foodString;

/* Step 5 - Array */
foods.push(addFood);
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`;
