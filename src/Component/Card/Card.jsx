import "@/index.css";
import { FaRegHeart } from "react-icons/fa";

import classicFlavours from "../../object.js";


function Card({pizza}) {
  return (
    <div class="w-2xs py-5">
      <div class="bg-white rounded-xl overflow-hidden shadow-lg">
        <img src={pizza.image} class="" alt="" />
        <div class="flex">
          <div class="flex flex-col gap-6 px-4 py-3 font-semibold">
            <div class="text-md font-bold">
              <h1>{pizza.name}</h1>
            </div>

            <div class="flex flex-col gap-5">
              <p class="text-sm text-gray-500 line-clamp-2">{pizza.description}</p>
              <p class="text-blue-500">Rs.1400</p>
            </div>
          </div>
          <div class="p-4">
           <span class="text-red-600">
            <FaRegHeart/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
