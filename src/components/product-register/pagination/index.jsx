import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function ProductPagination({ products, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    onPageChange(currentProducts);
  }, [currentPage,currentProducts, onPageChange]);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Stack spacing={2} style={{ marginTop: '20px' }}>
      <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
    </Stack>
  );
}

export default ProductPagination;
