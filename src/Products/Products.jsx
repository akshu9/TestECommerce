import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { addOrder } from '../store/OrderSlice';
import data from '../db/data';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Products = ({ result }) => {
  // Debugging: Log the result array
  console.log('Products result:', result);
  const orders = useSelector(state => state.orders)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = (product) => {
   // dispatch(addOrder(product))
    navigate(`/order/${product.id}`);
  };

  return (
    <section className="card-container">
      {result.map((product) => (
        <div className="card" key={product.id}>
          <img 
            src={product.img} 
            alt={product.name} 
            className="card-img" 
            onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/150"; }}
          />
          <div className="card-details">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-description">{}</p>
            <button onClick={() => handleOrder(product)} className="card-link">Order Now</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
