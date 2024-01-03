import React, { useEffect, useState } from 'react';
import GridOperations from './grid-operations';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import { useLoading } from '../contexts/LoadingContext';
import GetItemsApi from '../apis/getItemsApi';
import DeleteItemApi from '../apis/deleteItemApi';
import { Link } from 'react-router-dom';
import { useErrorHandler } from '../contexts/ErrorHandlerContext';

function ProductsGrid({ title }) {
  const [rowData, setRowData] = useState([]);
  const { startLoading, stopLoading } = useLoading();
  const { handleError } = useErrorHandler();

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
        handleError('Could not load items');
      }
    ).run();
  };

  const deleteItem = (id) => {
    startLoading();
    new DeleteItemApi(
      id,
      (response) => {
        stopLoading();
        loadItems();
      },
      (error) => {
        stopLoading();
        handleError('Could not delete item');
      }
    ).run();
  };

  const [colDefs] = useState([
    { field: 'title' },
    { field: 'description' },
    { field: 'price', cellRenderer: (params) => `$${params.value}` },
    {
      field: 'id',
      headerName: 'Actions',
      cellRenderer: ({ value }) => (
        <GridOperations value={value} onDelete={deleteItem} />
      ),
    },
  ]);

  return (
    <div>
      <div className='flex pb-2'>
        <h5 class='mb-2 mr-auto block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
          {title}
        </h5>
        <Link
          to={'/new_product'}
          class='text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-lg font-medium px-2  inline-flex space-x-1 items-center'
        >
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              width='24'
              height='24'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
              />
            </svg>
          </span>
        </Link>
      </div>
      <div className='ag-theme-quartz' style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
}

export default ProductsGrid;
