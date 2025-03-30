import { useContext } from 'react';
import { StockContext } from '../context/StockContext';
import { StockContextType } from '../types';

export const useSelectedStock = () => {
  const {
    selectedStock,
    initialStocks,
    setInitialStocks,
    updatedQuantityOfSelectedStock,
    setUpdatedQuantityOfSelectedStock,
    handleClose,
    error,
    setError,
  } = useContext(StockContext) as StockContextType;
  return {
    error,
    selectedStock,
    initialStocks,
    setInitialStocks,
    updatedQuantityOfSelectedStock,
    setUpdatedQuantityOfSelectedStock,
    handleClose,
    setError,
  };
};
