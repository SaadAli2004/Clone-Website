import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import Cart from "../Component/Cart.jsx";

function Store(){


    return(
        
        <>
        
        <Header/>

        <div className="flex m-20 justify-center">
           <Cart/>
        </div>
        
        <Footer/>
        </> 
    )
}

export default Store;