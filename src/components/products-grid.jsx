import React, { useEffect, useState } from 'react';
import GridOperations from './grid-operations';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import { useLoading } from '../contexts/LoadingContext';
import GetItemsApi from '../apis/getItemsApi';

function ProductsGrid(props) {
  const [rowData, setRowData] = useState([]);
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    loadItems();
  }, []);
  const loadItems = () => {
    startLoading();
    new GetItemsApi(
      (response) => {
        stopLoading();
        setRowData(response.data);
      },
      (error) => {
        stopLoading();
      }
    ).run();
  };

  const [colDefs] = useState([
    { field: 'title' },
    { field: 'price' },
    { field: 'description' },
    {
      field: 'operations',
      cellRenderer: ({ value }) => <GridOperations value={value} />,
    },
  ]);
  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}

export default ProductsGrid;
