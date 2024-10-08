import React, { useState } from "react";
import Modal from "react-modal";
import "../App.css";

const CategoryModal = ({ isOpen, onClose, handleAddNewCategory }) => {
  const [newName, setNewName] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [newIcon, setNewIcon] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (file && allowedTypes.includes(file.type)) {
      setNewIcon(file);
      setError("");
    } else {
      setNewIcon(null);
      setError("Only JPG, PNG, or WebP files are allowed.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newName || !newSlug) {
      setError("Name and Slug cannot be empty.");
      return;
    }

    handleAddNewCategory(newName, newSlug, newIcon);
    setNewName("");
    setNewSlug("");
    setNewIcon(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add New Category"
      className="bg-white rounded-2xl  p-5 w-[95%] sm:w-[75%] md:w-[50%] lg:w-[40%] mx-auto mt-[100px] transition-all duration-300 h-[400px] flex justify-center items-center flex-col"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70"
      ariaHideApp={false}
    >
      <h2 className="text-center font-bold text-black">Add New Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Name"
          className=" rounded-xl text-black outline-none p-2 bg-transparent border-b mt-8 w-full bg-gradient-to-br  border bg-gray-50 shadow-gray-700/60"
          required
        />
        <input
          type="file"
          className="
        file:bg-gradient-to-b file:from-blue-500 file:to-blue-600
        file:px-3 file:py-1 file:m-2
        file:border-none file:rounded-full
        file:text-white file:cursor-pointer
        file:shadow-lg file:shadow-blue-600/50
        bg-gradient-to-br
        text-black
        rounded-xl
        cursor-pointer
        border bg-gray-50 shadow-gray-700/60
        mt-8
        w-full
        border-b
      "
          id="file_input"
          onChange={handleFileChange}
          accept=".jpg, .jpeg, .png, .webp"
          placeholder="Choose Icon"
          required
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}{" "}
        <input
          type="text"
          value={newSlug}
          onChange={(e) => setNewSlug(e.target.value)}
          placeholder="Slug"
          className=" rounded-xl text-black outline-none p-2 mt-8 w-full bg-transparent border-b border bg-gray-50 shadow-gray-700/60"
          required
        />
        <div className="w-full flex justify-center gap-5">
          <button
            onClick={onClose}
            className="bg-[#ec1e1e] mt-8 w-[30%] rounded-3xl mt duration-200 transition-all hover:bg-[#cc1d1d] py-2 text-white"
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-[#06D001] mt-8 w-[30%] rounded-3xl mt duration-200 transition-all hover:bg-[#15ae13] py-2 text-white"
          >
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CategoryModal;
