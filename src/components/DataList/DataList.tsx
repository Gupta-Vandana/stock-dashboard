/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function DataList(props: {
  rows: any;
  columns: any;
  handleRowClick: any;
}) {
  const { rows, columns, handleRowClick } = props;
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
      onRowClick={handleRowClick}
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
    />
  );
}
