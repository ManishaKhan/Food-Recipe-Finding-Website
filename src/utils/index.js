// Search recipes by name
export async function fetchRecipes(filter = {}) {
  const query = filter.query?.trim();

  let url = "";

  if (query) {
    // Search by recipe name
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  } else {
    // Default recipes (Chicken category)
    url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`;
  }

  const response = await fetch(url);
  const data = await response.json();

  return data.meals || [];
}

// Fetch recipe details
export async function fetchRecipe(id) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const data = await response.json();

  return data.meals ? data.meals[0] : null;
}

// Fetch recipes by category
export async function fetchByCategory(category) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );

  const data = await response.json();

  return data.meals || [];
}

// Random recipe
export async function fetchRandomRecipe() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/random.php`
  );

  const data = await response.json();

  return data.meals[0];
}


// USing fake Json
// import recipes from "../data/recipes.json";

// export async function fetchRecipes(filter = {}) {
//   const query = filter.query?.toLowerCase() || "";

//   if (!query) return recipes;

//   return recipes.filter(recipe =>
//     recipe.strMeal.toLowerCase().includes(query)
//   );
// }

// export async function fetchRecipe(id) {
//   return recipes.find(recipe => recipe.idMeal === id);
// }

// export async function fetchByCategory(category) {
//   return recipes.filter(recipe => recipe.strCategory === category);
// }

// export async function fetchRandomRecipe() {
//   return recipes[Math.floor(Math.random() * recipes.length)];
// }