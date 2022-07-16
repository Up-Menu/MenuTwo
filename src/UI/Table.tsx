import { styled } from '@mui/material';
import {
  DataGrid,
  GridColumns,
  GridEventListener,
  GridValidRowModel
} from '@mui/x-data-grid';
import React, { Fragment } from 'react';

interface TableValuesType {
  Rows: readonly GridValidRowModel[];
  Columns: GridColumns<GridValidRowModel>;
  onCellEditCommitFn: GridEventListener<'cellEditCommit'>;
}

const Tables = (props: TableValuesType) => {
  const MyDataGrid = styled(DataGrid)`
    .MuiDataGrid-row:hover {
      background-color: rgb(140 124 240 / 8%);
    }
    .MuiDataGrid-columnHeader:focus,
    .MuiDataGrid-cell:focus,
    .MuiDataGrid-columnHeader:focus-within,
    .MuiDataGrid-cell:focus-within {
      outline: solid transparent 1px !important;
    }
  `;
  return (
    <Fragment>
      <div style={{ height: 400, width: '100%' }}>
        <MyDataGrid
          rows={props.Rows}
          columns={props.Columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection={false}
          onCellEditCommit={props.onCellEditCommitFn}
        />
      </div>
    </Fragment>
  );
};

export default Tables;
