import "@/index.css";
import { FaRegHeart } from "react-icons/fa";


function Card({ pizza }) {
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
              <p className="text-sm text-gray-500 line-clamp-2">
                {pizza.description}
              </p>
              <p className="text-blue-500">Rs.1400</p>
            </div>
          </div>
          <div className="p-4">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="transparent"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-red-600 hover:fill-red-600 hover:text-currentColor transition-colors duration-300 icon icon-tabler icons-tabler-outline icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              {/* <FaRegHeart /> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
