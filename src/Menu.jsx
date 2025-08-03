import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import classicFlavours from "./object.js";
function Menu(){


    return(

         <>
        
        <Header/>

       <div class="flex flex-wrap justify-center gap-10 p-10">
        {classicFlavours.map((pizza, index) => (
          <Card key={index} pizza={pizza} />
        ))}
      </div>
        
        <Footer/>
        </> 
    )
}

export default Menu;