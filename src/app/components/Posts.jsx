import React from "react";
import RecipePost from "./RecipePost";
import InstagramPost from "./InstagramPost";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Recipes() {
  return (
    <div className="flex flex-col items-center py-14 px-4 gap-8">
      <div className="flex flex-col gap-2">
        <h3
          className="text-brand-red text-4xl font-bold 
      text-center"
        >
          START COOKIN'
        </h3>
        <p
          className="text-brand-green text-xl font-bold 
      text-center leading-5"
        >
          DIG INTO OUR PLANT-BASED TREATS, GO-TO EATS, AND SOMETHING SWEETS.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <RecipePost imgSrc={"product-img-1"} caption={"Stack of Treats"} />
        <RecipePost
          imgSrc={"product-img-2"}
          caption={"Another Stack of Treats"}
        />
        <RecipePost
          imgSrc={"product-img-3"}
          caption={"AND ANOTHER Stack of Treats"}
        />
      </div>
      <button className="bg-brand-green text-white py-2 px-4 tracking-widest  -mt-5">
        VIEW MORE RECIPES
      </button>
      <h3
        className="text-brand-red text-4xl font-bold 
      text-center"
      >
        FOLLOW US ON INSTAGRAM
      </h3>
      <div className="flex flex-col gap-2">
        <InstagramPost imgSrc={"product-top-down-1"} />
        <InstagramPost imgSrc={"product-top-down-2"} />
        <InstagramPost imgSrc={"product-top-down-3"} />
      </div>
      <div className="bg-brand-red text-white flex items-center gap-3 py-2 w-5/12 rounded-lg justify-center -mt-5">
        <AiOutlineInstagram />
        <p>Follow on Instagram</p>
      </div>
    </div>
  );
}
