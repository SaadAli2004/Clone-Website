import "@/index.css";
import Card from "./Card/Card";
import classicFlavours from "../object.js";

function Catagory() {
  return (
    <>
    
    <div className="p-2 m-5 border-b-3 border-gray-200 ">
      <h1 className="text-2xl font-semibold">CLASSIC FLAVORS</h1>
    </div>
      <div className="flex flex-wrap justify-center gap-10 p-10">
        {classicFlavours.map((pizza, index) => (
          <Card key={index} pizza={pizza} />
        ))}
      </div>
    
    
    </>
  );
}

export default Catagory;
