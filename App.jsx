import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CryptoCard from './components/CryptoCard';
import CryptoChart from './components/CryptoChart';
import ReportDownloader from './components/ReportDownloader';
import { connectWebSocket } from './utils/websocket';

const CRYPTOS = ['bitcoin', 'ethereum', 'litecoin', 'dogecoin', 'solana'];

const App = () => {
  const [prices, setPrices] = useState({});
  const [theme, setTheme] = useState('light');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    connectWebSocket(CRYPTOS, setPrices);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <div className="grid">
        {CRYPTOS.map((id) => (
          <CryptoCard
            key={id}
            id={id}
            price={prices[id]}
            isFavorite={favorites.includes(id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      <CryptoChart cryptoId="bitcoin" />
      <ReportDownloader prices={prices} />
    </div>
  );
};

export default App;