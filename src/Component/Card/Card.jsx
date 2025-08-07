import "@/index.css";
import { FaRegHeart } from "react-icons/fa";

import classicFlavours from "../../object.js";


function Card({pizza}) {
  return (
    <div className="w-2xs py-5">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <img src={pizza.image} className="" alt="" />
        <div className="flex">
          <div className="flex flex-col gap-6 px-4 py-3 font-semibold">
            <div className="text-md font-bold">
              <h1>{pizza.name}</h1>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-sm text-gray-500 line-clamp-2">{pizza.description}</p>
              <p className="text-blue-500">Rs.1400</p>
            </div>
          </div>
          <div className="p-4">
           <span className="text-red-600">
            <FaRegHeart/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
