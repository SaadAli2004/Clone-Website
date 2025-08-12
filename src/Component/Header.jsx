import "@/index.css";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div className="bg-gray-100 text-gray-600 font-bold">
      <div className="flex justify-between items-center px-6 py-3">
        <div>
          <Link to="/">
          <img src="/assets/logo.png" className="w-auto h-7.5" alt="" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-8">
            <Link to="/menu">
              <li>MENU</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/cart">
          <img src="/assets/cart.png" className="w-auto h-7.5"></img>
          </Link>
          
          <div className="flex items-center gap-3">
            <img src="/assets/user.webp" className="w-9.5"></img>
            <h1>MY ACCOUNT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
