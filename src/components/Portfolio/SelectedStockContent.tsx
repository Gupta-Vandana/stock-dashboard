import { useSelectedStock } from '../../hooks/useSelectedStock';

export const SelectedStockContent = () => {
  const {
    selectedStock,
    error,
    updatedQuantityOfSelectedStock,
    setUpdatedQuantityOfSelectedStock,
    setError,
  } = useSelectedStock();

  const handleOnInputQuantityChange = (e: { target: { value: string } }) => {
    const quantity = parseInt(e.target.value);
    if (quantity <= 0) {
      setError('Quantity must be greater than 0');
      return;
    } else {
      setError('');
    }
    setUpdatedQuantityOfSelectedStock(quantity);
    console.log(updatedQuantityOfSelectedStock);
  };
  return (
    <>
      <div>
        <p>
          <b>Current quantities held:</b> {selectedStock?.quantityHeld}{' '}
        </p>
        <label>
          <b>Enter number of quantities to trade:</b>{' '}
        </label>
        <input
          type="number"
          onChange={handleOnInputQuantityChange}
          min="1"
          style={{ width: '40px', height: '20px' }}
        />
        {error ? <p style={{ color: 'red' }}>{error}</p> : null}
      </div>
    </>
  );
};
