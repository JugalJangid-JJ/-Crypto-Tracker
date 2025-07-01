export const getHistory = async (id) => {
  const res = await fetch(`/api/history/${id}`);
  return await res.json();
};

// ================== client/src/utils/websocket.js ==================
export const connectWebSocket = (cryptoIds, setPrices) => {
  const ws = new WebSocket('wss://ws.coincap.io/prices?assets=' + cryptoIds.join(','));
  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    setPrices(prev => ({ ...prev, ...data }));
  };
};
