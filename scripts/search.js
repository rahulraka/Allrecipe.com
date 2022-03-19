import { navbar, show, singleAppend } from "../components/navbar.js";
let header = document.querySelector("#nav");
header.innerHTML = navbar();
let parent = document.querySelector("#dish");

const searchMe = async () => {
  parent.innerHTML = null;
  let val = document.querySelector("#search").value;
  let url = `https://themealdb.com/api/json/v1/1/search.php?s=${val}`;
  let data = await show(url);
  singleAppend(parent, data.meals[0]);
};
document.querySelector(".fa-thin").addEventListener("click", searchMe);
