import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="font-bold text-black">Confirm</h2>
        <p className='text-sm text-black'>Are you sure you want to delete this category?</p>
        <div className="mt-4 flex justify-end">
          <button 
            className="mr-2 bg-gray-300 rounded-xl py-2 px-4 duration-200 transition-all hover:bg-gray-400 text-black"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className="bg-[#ec1e1e] rounded-xl mt duration-200 transition-all hover:bg-[#cc1d1d] py-2 px-4 text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
