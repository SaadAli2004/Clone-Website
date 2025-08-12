import "@/index.css";

function Footer() {
  return (
    <div className="flex text-lg p-8 border-t border-gray-400 justify-between ">
      <div>
        <h1 className="font-bold">Dominoes Pizza</h1>
        <ul className="text-gray-600">
          <li>About us</li>
          <li>Privacy</li>
          <li>Terms and Condition</li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold">Contact</h1>
        <ul className="text-gray-600">
          <li>Call 111 366 466</li>
          <li>Feedback</li>
          {/* <li>Terms and Condition</li> */}
        </ul>
      </div>

      <div>
        <h1 className="font-bold">Help</h1>
        <ul className="text-gray-600">
          <li>Track Order</li>
          <li>Store Finder</li>
          {/* <li>Terms and Condition</li> */}
        </ul>
      </div>
      <div>
        <img src="/assets/fake icon.png" alt="" />
      </div>
    </div>
  );
}

export default Footer;
