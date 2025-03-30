import Footer from './Footer';
import DataList from '../DataList/DataList';
import { availableStocks, columns } from '../../mockdata/availableStocks';

import { render } from '@testing-library/react';

describe('DataList', () => {
  it('should render successfully with title', () => {
    const { getByText } = render(<Footer />);

    const buyButton = getByText('Buy');
    const sellButton = getByText('Sell');
    expect(buyButton).toBeInTheDocument();
    expect(sellButton).toBeInTheDocument();
  });

  it('should render DataList component', () => {
    const { container } = render(
      <DataList
        columns={columns}
        rows={availableStocks}
        handleRowClick={() => {}}
      />
    );

    const grid = container.querySelector('.MuiDataGrid-root');
    expect(grid).toBeInTheDocument();
  });
});
