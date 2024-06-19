import React from "react";
import classNames from "classnames";

const Pagination = ({
  currentPage,
  totalRecords,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  LeftArrowIcon,
  RightArrowIcon,
}) => {
  const handlePrevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className="m-2 flex justify-between text-[#63666b] md:justify-end">
      <div className="text-xs font-normal md:text-base">
        <span>Items per page:</span>
        <input
          type="number"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="w-7 border-b-2 border-[#e5e5e5] md:w-10"
        />
      </div>

      <div className="flex">
        <div className="ml-2 text-xs font-normal md:text-base">
          {`${itemsPerPage * (currentPage - 1) + 1}-${Math.min(
            itemsPerPage * currentPage,
            totalRecords,
          )} of ${totalRecords}`}
        </div>
        <div className="flex">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={classNames(
              "p-1 disabled:cursor-not-allowed disabled:opacity-50 md:p-2",
            )}
          >
            {LeftArrowIcon ? <LeftArrowIcon /> : "<"}
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={classNames(
              "p-1 disabled:cursor-not-allowed disabled:opacity-50 md:p-2",
            )}
          >
            {RightArrowIcon ? <RightArrowIcon /> : ">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
