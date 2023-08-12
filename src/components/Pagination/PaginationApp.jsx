import React from 'react';
import { Pagination } from 'flowbite-react';
import { useContext } from 'react';
import Context from '../../context/ContextProvider';

const PaginationApp = () => {

  const { currentPage, setCurrentPage, totalPages } = useContext(Context);



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
        totalPages={totalPages}
      />
    </div>
  );
}
export default PaginationApp;