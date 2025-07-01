import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getHistory } from '../utils/api';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const CryptoChart = ({ cryptoId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getHistory(cryptoId).then((res) => {
      const times = res.data.map(p => p.date);
      const prices = res.data.map(p => p.priceUsd);
      setData({
        labels: times,
        datasets: [{ label: `${cryptoId} (24h)`, data: prices, borderColor: 'blue' }],
      });
    });
  }, [cryptoId]);

  return data ? <Line data={data} /> : <p>Loading chart...</p>;
};

export default CryptoChart;