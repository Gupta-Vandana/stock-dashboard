export const availableStocks = [
  {
    id: 1,
    symbol: 'AAPL',
    currentPrice: 150.25,
    dailyChange: 1.15,
    quantityHeld: 10,
  },
  {
    id: 2,
    symbol: 'GOOGL',
    currentPrice: 2800.5,
    dailyChange: -0.45,
    quantityHeld: 5,
  },
  {
    id: 3,
    symbol: 'AMZN',
    currentPrice: 3400.0,
    dailyChange: 0.75,
    quantityHeld: 2,
  },
  {
    id: 4,
    symbol: 'MSFT',
    currentPrice: 200.75,
    dailyChange: -0.25,
    quantityHeld: 8,
  },
  {
    id: 5,
    symbol: 'TSLA',
    currentPrice: 800.0,
    dailyChange: 1.5,
    quantityHeld: 3,
  },
];

export const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'symbol', headerName: 'Symbol', width: 150 },
  { field: 'currentPrice', headerName: 'Current price', width: 150 },
  { field: 'dailyChange', headerName: 'Daily change (%)', width: 150 },
  { field: 'quantityHeld', headerName: 'Quantity held', width: 150 },
];
