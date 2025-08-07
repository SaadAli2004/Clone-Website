import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import Card from "../Component/Card/Card.jsx";
import Catagory from "../Component/Catagory.jsx";
import classicFlavours from "../object.js";
import ToDoList from "../Component/ToDoList.jsx";
function Menu() {
  return (
    <>
      <Header />
      <Catagory />

{/* //Card used to be here */}
 <ToDoList/>
      <Footer />
    </>
  );
}

export default Menu;
