import { navbar, show, append, singleAppend } from "../components/navbar.js";
let header = document.querySelector("#nav");
header.innerHTML = navbar();
let url = `https://themealdb.com/api/json/v1/1/random.php
`;
let data = await show(url);
let id = data.meals[0];
let parent = document.querySelector("#dish");
// let idData=await show(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
// console.log(idData)
singleAppend(parent, id);
