function Cart() {
    return(
        <>
        <div className="w-full flex flex-col gap-4">
            <div className="border-b-3 text-3xl p-2 font-semibold border-gray-200 ">
            <h1 >MY CART</h1>

            </div>
            <div className="p-20 shadow-xl rounded-md bg-gray-100 text-center">
                <h1 className="text-xl text-gray-600">You haven't ordered anything yet!
                </h1>
            </div>
        </div>
        </>
    )
}
export default Cart;