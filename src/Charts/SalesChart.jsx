import React from 'react';
import DonutChart from 'react-donut-chart';

// things I would never do:

const SalesChart=()=>{
    return(
<DonutChart
  data={[
    {
        label: 'Give you up',
        value: 25,
      },
      {
        label: 'Other 1',
        value: 30,
      },
      {
        label: 'Other 2',
        value: 20,
      },
  ]}
/>
)};

export default SalesChart;
