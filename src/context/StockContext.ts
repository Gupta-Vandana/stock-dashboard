import { createContext } from 'react';
import { StockContextType } from '../types';

export const StockContext = createContext<StockContextType | undefined>({
  selectedStock: undefined,
  initialStocks: [],
  updatedQuantityOfSelectedStock: null,
  setUpdatedQuantityOfSelectedStock: () => {},
  setInitialStocks: () => {},
  handleClose: () => {},
  error: '',
  setError: () => {},
});
