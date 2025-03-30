import { render } from '@testing-library/react';
import DataList from './DataList';

const columns = [{ field: 'id', headerName: 'ID', width: 90 }];
const rows = [
  {
    id: 1,
    symbol: 'AAPL',
    currentPrice: 150.25,
    dailyChange: 1.15,
    quantityHeld: 10,
  },
];

describe('DataList', () => {
  it('should render successfully', () => {
    const { container } = render(
      <DataList columns={columns} rows={rows} handleRowClick={() => {}} />
    );

    const grid = container.querySelector('.MuiDataGrid-root');
    expect(grid).toBeInTheDocument();
  });

  it('should have columns defined and not empty', () => {
    expect(columns).toBeDefined();
    expect(columns.length).toBeGreaterThan(0);
  });
});
