import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/planet-earth_5699945.png";
import { useCard } from "../contexts/CardContext";

function Navbar() {
  const { nbCard } = useCard();
  return (
    <header className="text-gray-600 body-font bg-pink-200 p-3">
      <div className="container mx-auto  flex flex-wrap p-5 flex-col md:flex-row justify-between ">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <img src={logo} alt="logo" className="w-18 h-18" />
          <span className="ml-8 text-4xl">Florica</span>
        </Link>
        <Link
          to="/card"
          className="relative inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-300 rounded text-base m-2.5 "
          type="button"
        >
          Panier
          <span className="absolute top-0 right-0 inline-flex items-center gap-x-1.5 rounded-full bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-Gray-950 transform translate-x-1/2 -translate-y-1/2">
            <svg
              viewBox="0 0 6 6"
              aria-hidden="true"
              className="size-2 fill-pink-400"
            >
              <circle r={3} cx={3} cy={3} />
            </svg>
            {nbCard}
          </span>
          <ShoppingCart className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
