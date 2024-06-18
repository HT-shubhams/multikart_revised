import React from "react";

export const DeleteModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="border rounded-md mx-5 shadow-md p-4 w-full max-w-md bg-white">
        <div className="font-medium text-lg md:text-2xl text-[#26282D] text-center mb-2">
          Delete Confirmation
        </div>
        <div className="text-sm md:text-lg text-center mb-4">
          Are you sure you want to delete this User?
        </div>
        <div className="flex justify-center space-x-3">
          <button
            type="button"
            className="w-20 h-10 md:w-32 md:h-12 bg-[#641cc0] text-white rounded-md"
          >
            Delete
          </button>
          <button
            type="button"
            className="w-20 h-10 md:w-32 md:h-12 text-[#26282D] rounded-md border border-[#d3d3d3]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
