import { useState } from "react";

import Navigation from "../src/Navigation/Nav";
import Products from "../src/Products/Products";
import products from "./db/data";
import Recommended from "../src/Recommended/Recommended";
import Sidebar from "../src/Sidebar/Sidebar";
import Card from "../src/components/Card";
import "../src/index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Login/Login";
import Overview from "./DashBoard/Overview";
import ProtectedRoute from "./Login/ProtectedRoute";
import { ProductPage } from "./Products/ProductPage";
import Order from "../src/Order/Order";
import data from "../src/db/data";
import { Provider } from "react-redux";
import { store } from "../src/store/Store";
function App() {
  const [query, setQuery] = useState('');
  const [products,setProducts] = useState(data); // Using productsData

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title && product.title.toLowerCase().includes(query.toLowerCase())
  );

 // const result = filteredData(products, selectedCategory, query);

  return (
    <>
    <Provider store={store}>
   <Router>
        <Navigation query={query} handleInputChange={handleInputChange} />
        <div className="app-container">
          
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
              {/* <Route path="/recommened" element={<Recommended handleClick={handleClick} />} /> */}
              <Route path="/products" element={<ProductPage result={filteredProducts}  />
              
          } />
          <Route path="/order/:productId" element={<Order />} />
            </Routes>
          </div>
        </div>
    </Router>
    </Provider>
    </>
  );
}

export default App;