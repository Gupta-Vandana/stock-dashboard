import { Button } from '@mui/material';
import { useSelectedStock } from '../../hooks/useSelectedStock';
import { StockDataType } from '../../types';

const Footer = () => {
  const {
    selectedStock,
    updatedQuantityOfSelectedStock,
    initialStocks,
    setInitialStocks,
    handleClose,
    setError,
  } = useSelectedStock();

  const onBuyClick = () => {
    const updatedStocks = initialStocks.map((stock: StockDataType) => {
      if (stock.symbol === selectedStock?.symbol) {
        const updatedStock = {
          ...stock,
          quantityHeld: updatedQuantityOfSelectedStock
            ? updatedQuantityOfSelectedStock + stock.quantityHeld
            : stock.quantityHeld,
        };
        return updatedStock;
      }
      return stock;
    });
    setInitialStocks(updatedStocks);
    handleClose();
  };

  const onSellClick = () => {
    if (
      updatedQuantityOfSelectedStock &&
      selectedStock?.quantityHeld &&
      updatedQuantityOfSelectedStock > selectedStock?.quantityHeld
    ) {
      setError('Not enough stocks to sell');
      return;
    } else {
      setError('');
    }
    const updatedStocks = initialStocks.map((stock: StockDataType) => {
      if (stock.symbol === selectedStock?.symbol) {
        const updatedStock = {
          ...stock,
          quantityHeld: updatedQuantityOfSelectedStock
            ? stock.quantityHeld - updatedQuantityOfSelectedStock
            : stock.quantityHeld,
        };
        return updatedStock;
      }
      return stock;
    });
    setInitialStocks(updatedStocks);
    handleClose();
  };
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={onBuyClick}
        disabled={!updatedQuantityOfSelectedStock}
      >
        Buy
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={onSellClick}
        disabled={!updatedQuantityOfSelectedStock}
      >
        Sell
      </Button>
    </>
  );
};

export default Footer;
