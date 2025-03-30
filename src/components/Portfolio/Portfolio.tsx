import { useState } from 'react';
import { availableStocks, columns } from '../../mockdata/availableStocks';
import DataList from '../DataList/DataList';
import Modal from '../Modal/Modal';
import { StockContext } from '../../context/StockContext';
import { SelectedStockContent } from './SelectedStockContent';
import Footer from './Footer';
import { StockDataType } from '../../types';

const Portfolio = () => {
  //const { title, content, footer } = props;
  const [openModal, setOpenModal] = useState(false);
  const [initialStocks, setInitialStocks] =
    useState<StockDataType[]>(availableStocks);
  const [updatedQuantityOfSelectedStock, setUpdatedQuantityOfSelectedStock] =
    useState<number | null>(null);

  const [selectedStock, setSelectedStock] = useState<StockDataType | undefined>(
    undefined
  );
  const [error, setError] = useState<string>('');

  const handleClose = () => {
    setOpenModal(false);
    setError('');
    setSelectedStock(undefined);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRowClick = (params: any) => {
    setOpenModal(true);
    setSelectedStock(params.row);
  };

  return (
    <>
      <StockContext.Provider
        value={{
          selectedStock,
          initialStocks,
          setInitialStocks,
          updatedQuantityOfSelectedStock,
          setUpdatedQuantityOfSelectedStock,
          handleClose,
          error,
          setError,
        }}
      >
        <DataList
          rows={initialStocks}
          columns={columns}
          handleRowClick={handleRowClick}
        />

        <Modal
          title={selectedStock?.symbol}
          content={<SelectedStockContent />}
          footer={<Footer />}
          handleClose={handleClose}
          open={openModal}
        />
      </StockContext.Provider>
    </>
  );
};

export default Portfolio;
