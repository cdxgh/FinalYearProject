import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {useSelector} from "react-redux"

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {currentUser} = useSelector((state)=>state.user); // Replace this with actual user state/prop

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search submission logic
    console.log("Searching for:", searchTerm);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-2xl flex items-center">
            <span className="text-indigo-600">Rental</span>
            <span className="text-pink-600 ml-1">Cloth</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className="bg-gray-100 p-2 rounded-full flex items-center shadow-inner">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none px-2 w-32 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="p-2 rounded-full bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 text-white">
            <FaSearch />
          </button>
        </form>
        <ul className="flex gap-6 items-center">
          <li>
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium">
              About
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center">
              {currentUser ? (
                <img
                  src={currentUser.avatar}
                  alt="avatar"
                  className="rounded-full h-8 w-8 object-cover border-2 border-indigo-600"
                />
              ) : (
                <span className="text-gray-700 hover:text-indigo-600 font-medium">Sign In</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
