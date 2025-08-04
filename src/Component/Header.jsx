import "@/index.css";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div class="bg-gray-100 text-gray-600 font-bold">
      <div class="flex justify-between items-center px-6 py-3">
        <div>
          <Link to="/">
          <img src="/assets/logo.png" class="w-auto h-7.5" alt="" />
          </Link>
        </div>
        <div>
          <ul class="flex gap-8">
            <Link to="/menu">
              <li>MENU</li>
            </Link>
          </ul>
        </div>
        <div class="flex items-center gap-3">
          <img src="/assets/cart.png" class="w-auto h-7.5"></img>
          <div class="flex items-center gap-3">
            <img src="/assets/user.webp" class="w-9.5"></img>
            <h1>MY ACCOUNT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
