import React, { useState } from 'react';
import { Pagination } from 'flowbite-react';

const PaginationApp = () => {
 const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex items-center justify-center text-center">
      <Pagination
        currentPage={currentPage}
        layout="pagination"
        nextLabel="Anterior"
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
        previousLabel="Siguiente"
        showIcons
        totalPages={10}
      />
    </div>
  );
}
export default PaginationApp;