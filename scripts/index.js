import { navbar, show,append } from "../components/navbar.js";
let header = document.querySelector("#nav");
header.innerHTML = navbar();
let url=`https://themealdb.com/api/json/v1/1/search.php?s=`;
let data = await show(url);
let parent = document.querySelector("#data");
console.log(data.meals);
append(data.meals, parent);


`https://themealdb.com/api/json/v1/1/filter.php?a=indian`