import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLoading } from '../../contexts/LoadingContext';
import GetItemApi from '../../apis/getItemApi';
import { useErrorHandler } from '../../contexts/ErrorHandlerContext';

function ShowProduct(props) {
  let { id } = useParams();
  let [title, setTitle] = useState('');
  let [price, setPrice] = useState('');
  let [description, setDescription] = useState('');

  let navigate = useNavigate();
  let { startLoading, stopLoading } = useLoading();
  let { handleError } = useErrorHandler();

  useEffect(() => {
    get_item();
  }, []);

  let get_item = () => {
    startLoading();
    new GetItemApi(
      id,
      (response) => {
        stopLoading();
        setTitle(response.data.title);
        setPrice(response.data.price);
        setDescription(response.data.description);
      },
      (error) => {
        stopLoading();
        handleError('This product does not exist', '/');
      }
    ).run();
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='w-full max-w-4xl'>
        <div className='mb-5'>
          <label
            for='title'
            className='mb-3 block text-base font-medium text-[#07074D]'
          >
            Title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            readOnly
            className='w-full rounded-md border  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md border-[#e0e0e0]'
            value={title}
          />
        </div>
        <div className='mb-5'>
          <label
            for='price'
            className='mb-3 block text-base font-medium text-[#07074D]'
          >
            Price
          </label>
          <input
            type='number'
            name='price'
            id='price'
            placeholder='100'
            readOnly
            className='w-full rounded-md border  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md border-[#e0e0e0]'
            value={price}
          />
        </div>
        <div className='mb-5'>
          <label
            for='description'
            className='mb-3 block text-base font-medium text-[#07074D]'
          >
            Description
          </label>
          <textarea
            rows='4'
            name='description'
            id='description'
            readOnly
            placeholder='Type your description'
            className='w-full rounded-md border  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md border-[#e0e0e0]'
            value={description}
          ></textarea>
        </div>
        <div className='flex space-x-4'>
          <button
            type='button'
            onClick={() => {
              navigate(-1);
            }}
            className='hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none'
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
