import React from 'react';
import { useInView } from 'react-intersection-observer';
import Delete from '../assets/delete.png';

const CategoryCard = ({ category, openDeleteModal }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="h-[310px] sm:h-[280px] md:h-[270px] lg:h-[270px] text-black bg-white rounded-2xl p-5 relative font-medium shadow-md"
    >
      {inView && (
        <>
          <img
            src={
              "https://telebe360.elxanhuseynli.com/storage/images/icons/" +
              category.icon
            }
            alt=""
            className="w-full h-52 sm:h-44 md:h-[176px] lg:h-44 object-cover rounded-lg"
          />
          <div className="absolute bottom-4">
            <span className="truncate w-[90px] sm:w-[100px] md:w-[140px] lg:w-[90px] block">
              <strong>Name: </strong>
              {category.name}
            </span>
            <span className="truncate w-[90px] sm:w-[100px] md:w-[140px] lg:w-[125px] block">
              <strong>Slug: </strong>
              {category.slug}
            </span>
          </div>
          <button
            onClick={() => openDeleteModal(category.id)}
            className="absolute bottom-4 right-4"
          >
            <img src={Delete} alt="" className="h-6" />
          </button>
        </>
      )}
    </div>
  );
};

export default CategoryCard;
