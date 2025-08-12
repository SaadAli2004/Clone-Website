import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import ToDoList from "../Component/ToDoList.jsx";

function Store(){


    return(
        
        <>
        
        <Header/>

        <div className="flex m-20 justify-center">
            <ToDoList/>
        </div>
        
        <Footer/>
        </> 
    )
}

export default Store;