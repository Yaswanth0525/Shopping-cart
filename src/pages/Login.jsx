// pages/Login.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../context/indexs"; 
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(ShoppingCartContext); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setMessage({ type: "", text: "" }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const authenticatedUser = storedUsers.find((user) => user.username === username);

    if (authenticatedUser && authenticatedUser.password === password) {
      setMessage({ type: "success", text: "Login successful!" });
      setIsLoggedIn(true);
      toast.success("Login successful!");
      navigate("/"); 
    } else {
      toast.error("Invalid username or password");
      setMessage({ type: "error", text: "Invalid username or password" });
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/mockup-small-online-shopping-cart-ecommerce-product-ordering-receiving-concept-ecommerce-online-shopping-mockup-design-product-ordering-user-interface_918839-121304.jpg')`,
      }}
    >
      <div className="bg-white bg-opacity-20 shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center font-serif text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-900 mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={handleInputChange(setUsername)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-900 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handleInputChange(setPassword)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          {message.text && (
            <p
              className={`text-center text-sm mt-2 ${
                message.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {message.text}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
