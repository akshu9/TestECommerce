import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { removeOrder } from '../store/OrderSlice';


const Order= () => {
  const { id } = useParams();
  const orders = useSelector((state) => state.order);
  const order = orders && orders.find((order) => order.id === id); // Check if orders array is defined
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = () => {
    dispatch(removeOrder(id));
    navigate('/products');
  };
  

  if (!order) {
    return <p>Order not found</p>;
  }

  // Ensure that the 'img' property is a plain string representing the URL
  const imgSrc = typeof order.img === 'string' ? order.img : '';

  return (
    <div>
      <h1>Order Details</h1>
      <img src={imgSrc} alt={order.name} />
      <h2>{order.name}</h2>
      <p>{order.description}</p>
      <button onClick={handleRemove}>Delete Order</button>
    </div>
  );
};

export default Order;
