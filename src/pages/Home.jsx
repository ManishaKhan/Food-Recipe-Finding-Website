
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <main className="w-full bg-black min-h-screen pt-20">

      <Header
        title={
          <>
            Welcome Foodies,
            <br />
            Your All In One Destination For Food Recipes!
          </>
        }
        type="home"
      />

      {/* Food Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl text-center font-bold text-white mb-4">
          Discover Delicious Recipes
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          Explore hundreds of delicious recipes from around the world.
          Whether you're craving Indian, Italian, Chinese, Mexican, desserts,
          seafood or healthy meals, we've got something for every foodie.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
            alt="Pizza"
            className="rounded-2xl h-64 w-full hover:scale-105 duration-300"
          />

          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
            alt="Burger"
            className="rounded-2xl h-64 w-full hover:scale-105 duration-300"
          />

          <img
            src="https://images.unsplash.com/photo-1603133872878-684f208fb84b"
            alt="Pasta"
            className="rounded-2xl h-64 w-full hover:scale-105 duration-300"
          />

          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947"
            alt="Salad"
            className="rounded-2xl h-64 w-full hover:scale-105 duration-300"
          />

        </div>

        <div className="flex justify-center mt-14">

          <Link
            to="/recipes"
            className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-full text-white font-semibold text-lg duration-300 shadow-lg"
          >
            🍽️ Explore Recipes
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Home;