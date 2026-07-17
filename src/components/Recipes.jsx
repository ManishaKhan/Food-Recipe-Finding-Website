
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
import { FaSearch } from "react-icons/fa";
import { fetchRecipes, fetchByCategory } from "../utils";

const categories = [
  "Beef",
  "Chicken",
  "Seafood",
  "Dessert",
  "Pasta",
  "Vegetarian",
];

const Recipes = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 12;

  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true);

      if (query.trim()) {
        const data = await fetchRecipes({ query });
        setRecipes(data);
      } else {
        const results = await Promise.all(
          categories.map(fetchByCategory)
        );

        const merged = results.flat();

        const unique = merged.filter(
          (recipe, index, self) =>
            index === self.findIndex(
              (r) => r.idMeal === recipe.idMeal
            )
        );

        setRecipes(unique);
      }

      // Reset page when search/category changes
      setCurrentPage(1);

      setLoading(false);
    };

    loadRecipes();
  }, [query]);


  // Pagination calculation
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  const currentRecipes = recipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );


  return (
    <>
      <div className="max-w-3xl mx-auto px-5 py-6">
        <SearchBar
          placeholder="Search delicious recipes..."
          value={query}
          name="query"
          handleInputChange={(e) => setQuery(e.target.value)}
          rightIcon={<FaSearch />}
        />
      </div>

      {loading ? (
        <h2 className="text-center text-white">
          Loading...
        </h2>
      ) : (
        <>
          <div className="recipes-grid max-w-full">
            {currentRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.idMeal} 
                recipe={recipe} 
              />
            ))}
          </div>


          {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 my-10 flex-wrap">

                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                  className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-40"
                >
                  Prev
                </button>


                {Array.from({ length: totalPages }, (_, index) => index + 1)
                  .filter((page) => {
                    return (
                      page === 1 ||
                      page === totalPages ||
                      Math.abs(page - currentPage) <= 2
                    );
                  })
                  .map((page, index, arr) => (
                    <React.Fragment key={page}>

                      {/* Dots */}
                      {index > 0 && page - arr[index - 1] > 1 && (
                        <span className="text-white px-2">
                          ...
                        </span>
                      )}

                      <button
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded ${
                          currentPage === page
                            ? "bg-red-600 text-white"
                            : "bg-gray-700 text-white"
                        }`}
                      >
                        {page}
                      </button>

                    </React.Fragment>
                  ))}


                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-40"
                >
                  Next
                </button>

              </div>
            )}
        </>
      )}
    </>
  );
};

export default Recipes;