import "./index.css";

function Header() {
  return (
    <div class="bg-gray-100 text-gray-600 font-bold">
      <div class="flex justify-between items-center px-6 py-3">
        <div>
        <img src="./public/assets/logo.png" class="w-auto h-7.5" alt="" />
        </div>
        <div>
          <ul class="flex gap-8">
            <li>MENU</li>
            <li>STORES</li>
            <li>GET THE APP</li>
          </ul>
        </div>
        <div class="flex items-center gap-3">
          <img src="./public/assets/cart.png" class="w-auto h-7.5"></img>
          <div class="flex items-center gap-3">
            <img src="./public/assets/user.webp" class="w-9.5"></img>
            <h1>MY ACCOUNT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
