import React from "react";

const Header = ({ onAddCategory, onLogout }) => {
  return (
    <div className="flex gap-3 absolute top-5 right-10">
      <button
        onClick={onAddCategory}
        className="bg-[#06D001] rounded-2xl duration-200 transition-all hover:bg-[#15ae13] px-6 py-1 text-white"
      >
        Add New Category
      </button>
      <button
        onClick={onLogout}
        className="bg-[#FF0000] px-3 py-1 rounded-2xl duration-200 transition-all hover:bg-[#c11313] text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
