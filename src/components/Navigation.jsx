import { useContext } from "react";
import { ShoppingCartContext } from "../context/indexs";
import { Link } from "react-router-dom";

function Navigation() {
  const { setIsLoggedIn } = useContext(ShoppingCartContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user"); // Clear the stored user data
  };

  return (
    <nav className="p-4 bg-teal-600 mx-auto max-w-full">
  <ul className="flex flex-row justify-end items-center space-x-6">
    <li>
      <Link
        to="/"
        className="px-5 py-2 bg-emerald-400 text-white text-lg font-semibold hover:text-black border border-cyan-500 rounded-full"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/product"
        className="px-5 py-2 bg-emerald-400 text-white text-lg font-semibold hover:text-black border border-cyan-500 rounded-full"
      >
        Products
      </Link>
    </li>
    <li>
      <Link
        to="/cart"
        className="px-5 py-2 bg-emerald-400 text-white text-lg font-semibold hover:text-black border border-cyan-500 rounded-full"
      >
        Cart
      </Link>
    </li>
    <li>
      <button
        className="px-5 py-2 bg-emerald-400 text-white text-lg font-semibold hover:text-black border border-cyan-500 rounded-full"
        onClick={handleLogout}
      >
        Logout
      </button>
    </li>
  </ul>
</nav>

  
  );
}

export default Navigation;
