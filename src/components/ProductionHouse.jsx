import React from "react";
import disney from "../assets/disney.png";
import marvel from "../assets/marvel.png";
import nationalG from "../assets/nationalG.png";
import pixar from "../assets/pixar.png";
import starWar from "../assets/starwar.png";

import starWarV from "../Videos/star-wars.mp4";
import disneyV from "../Videos/disney.mp4";
import marvelV from "../Videos/marvel.mp4";
import nationalGV from "../Videos/national-geographic.mp4";
import pixarV from "../Videos/pixar.mp4";

export const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: starWar,
      video: starWarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: pixar,
      video: pixarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
      {productionHouseList.map((item) => (
        <div key={item.id}
          className="border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            "
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
          />
          <img src={item.image} className="w-full z-[1] opacity-100" />
        </div>
      ))}
    </div>

  );
};  

export default ProductionHouse;
