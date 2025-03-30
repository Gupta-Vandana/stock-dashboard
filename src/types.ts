export type StockDataType = {
  id: number;
  symbol: string;
  currentPrice: number;
  dailyChange: number;
  quantityHeld: number;
};

export type StockContextType = {
  selectedStock?: StockDataType;
  initialStocks: StockDataType[];
  updatedQuantityOfSelectedStock: number | null;
  setInitialStocks: (initialStocks: StockDataType[]) => void;
  setUpdatedQuantityOfSelectedStock: (quantity: number | null) => void;
  handleClose: () => void;
  error: string;
  setError: (error: string) => void;
};
