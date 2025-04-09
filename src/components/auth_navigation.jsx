 import { Link } from "react-router-dom";
 function AuthNavigation() {
  return (
    <nav className=" p-4 bg-teal-600 mx-auto max-w-full">
                <ul className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-6 sm:gap-x-4">
                    <li>
                        <Link
                            to="/login"
                            className="px-5 py-2 hover:bg-emerald-400 text-white text-lg font-semibold hover:text-black border border-cyan-500 rounded-full"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/register"
                            className="px-5 py-2 hover:bg-emerald-400 text-white text-lg font-semibold hover:text-black border border-cyan-500 rounded-full"
                        >
                            Register
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
export default AuthNavigation;