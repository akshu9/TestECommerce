import React from 'react';
import  Sidebar  from '../Sidebar/Sidebar';
import Products from './Products';
import data from '../db/data';
export const ProductPage = () => {
    
    const result = data;

    
  return (
    <>
    <div className="product-page-container">
       <Sidebar/> 
      <Products result={result} />
      </div>
    </>
  );
};
