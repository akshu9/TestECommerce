import React from 'react';
import SalesChart from '../Charts/SalesChart';
import OrdersChart from '../Charts/OrdersChart';
import Customer from '../Charts/Customer';
import Revenue from '../Charts/Revenue';
const Overview = () => {
  return (
    <div>
      <h2>Dashboard Overview</h2>
      <div>
        <SalesChart />
        <OrdersChart />
        <Customer/>
        <Revenue/>
      </div>
    </div>
  );
};

export default Overview;
