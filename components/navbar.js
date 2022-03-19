const navbar = () => {
  return ` <div id="navbar">
    <h2><a href="/">Allrecipe.com</a></h2>
    
    <div id="options">
      <h3><a href="./search.html">Search Your Recipe</a></h3>
      <h3><a href="./best.html">Best Of The Day</a></h3>
    
      <h5><a href="./index.html">Latest</a></h5>
    </div>
    </div>`;
};

const show = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
    // console.log(data)
  } catch (e) {
    alert("really sorry we dont have your dish yet");
  }
};

const append = (data, parent) => {
  parent.innerHTML = null;
  data.map(({ strMealThumb, strMeal }) => {
    let main = document.createElement("div");
    main.setAttribute("id", "main");

    let img = document.createElement("img");
    img.setAttribute("id", "thumbNail");
    img.src = strMealThumb;

    let title = document.createElement("h3");
    title.setAttribute("id", "title");
    title.innerText = strMeal;
    main.append(img, title);
    parent.append(main);
  });
};

const singleAppend = (parent, data) => {
  parent.innerHTML = null;
  let img = document.createElement("img");
  img.setAttribute("id", "thumbSingle");
  img.src = data.strMealThumb;

  let title = document.createElement("h2");
  title.setAttribute("id", "name");
  title.innerHTML = data.strMeal;

  let cuisine = document.createElement("h4");
  cuisine.setAttribute("id", "cuisine");
  cuisine.innerHTML = `Cuisine: ${data.strArea}`;

  let ingredient = document.createElement("h4");
  ingredient.setAttribute("id", "ingredient");
  ingredient.innerText = `Ingredients:${data.strIngredient1}, ${data.strIngredient2} ${data.strIngredient3}, ${data.strIngredient4}, ${data.strIngredient5}, ${data.strIngredient6}, ${data.strIngredient7}, ${data.strIngredient8}, ${data.strIngredient9}, ${data.strIngredient10}`;

  let instruction = document.createElement("h4");
  instruction.setAttribute("id", "instruction");
  instruction.innerText = `Instructions:  ${data.strInstructions}`;
  parent.append(img, title, cuisine, ingredient, instruction);
};
export { navbar, show, append, singleAppend };
// export {show}
