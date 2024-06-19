import React from "react";

export const DeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="mx-5 w-full max-w-md rounded-md border bg-white p-4 shadow-md">
        <div className="mb-2 text-center text-lg font-medium text-[#26282D] md:text-2xl">
          Delete Confirmation
        </div>
        <div className="mb-4 text-center text-sm md:text-lg">
          Are you sure you want to delete this User?
        </div>
        <div className="flex justify-center space-x-3">
          <button
            type="button"
            className="h-10 w-20 rounded-md bg-[#641cc0] text-white md:h-12 md:w-32"
            onClick={onConfirm}
          >
            Delete
          </button>
          <button
            type="button"
            className="h-10 w-20 rounded-md border border-[#d3d3d3] text-[#26282D] md:h-12 md:w-32"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
