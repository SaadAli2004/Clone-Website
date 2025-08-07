import "@/index.css";

function Sticky() {
    return(
<div className="bg-black">
    <div className="text-lg font-bold flex justify-center text-white p-3">
    <div className="bg-blue-600 px-20 rounded-xs py-2">
        <div className="">
         <h1>
            DELIVERY
         </h1>
        </div>
    </div>
    <div className="bg-red-600 px-20 rounded-xs py-2">
      <div>
        <h1>PICK UP</h1>
      </div>
    </div>

    </div>
</div>

    );

}

export default Sticky;