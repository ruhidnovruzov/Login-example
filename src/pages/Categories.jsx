import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CategoryModal from "../components/Modal";
import ConfirmationModal from "../components/DeleteModal";
import Layout from "../layout/Layout";
import CategoryCard from "../components/CategoriCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const fetchCategories = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/sign-in");
      return;
    }

    try {
      const response = await axios.get(
        "https://telebe360.elxanhuseynli.com/api/categories",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCategories(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/sign-in");
    } else {
      fetchCategories();
    }
  }, [navigate]);

  const handleAddNewCategory = async (newName, newSlug, newIcon) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", newName);
      formData.append("slug", newSlug);
      formData.append("icon", newIcon);

      const response = await axios.post(
        "https://telebe360.elxanhuseynli.com/api/categories",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        fetchCategories();
        setModalIsOpen(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleDeleteCategory = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      await axios.delete(
        `https://telebe360.elxanhuseynli.com/api/categories/${categoryToDelete}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== categoryToDelete)
      );
    } catch (error) {
      console.log("Error", error);
    } finally {
      setDeleteModalOpen(false);
      setCategoryToDelete(null);
    }
  };

  const openDeleteModal = (id) => {
    setCategoryToDelete(id);
    setDeleteModalOpen(true);
  };

  return (
    <Layout onAddCategory={() => setModalIsOpen(true)} onLogout={logOut}>
      <div className="bg-[#dbe3ff] w-full text-[white] py-8 px-10 sm:px-20 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              openDeleteModal={openDeleteModal}
            />
          ))}
        </div>

        <CategoryModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          handleAddNewCategory={handleAddNewCategory}
        />

        <ConfirmationModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleDeleteCategory}
        />
      </div>
    </Layout>
  );
};

export default Categories;
