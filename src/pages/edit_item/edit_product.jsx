import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddItemApi from '../../apis/addItemApi';
import { useLoading } from '../../contexts/LoadingContext';
import GetItemApi from '../../apis/getItemApi';
import UpdateItemApi from '../../apis/updateItemApi';
import { useErrorHandler } from '../../contexts/ErrorHandlerContext';
import Layout from '../../components/layout';

function EditProduct(props) {
  let { id } = useParams();

  let [title, setTitle] = useState('');
  let [title_has_error, setTitleHasError] = useState('');
  let [price, setPrice] = useState('');
  let [price_has_error, setPriceHasError] = useState('');
  let [description, setDescription] = useState('');
  let [description_has_error, setDescriptionHasError] = useState('');

  let navigate = useNavigate();
  let { startLoading, stopLoading } = useLoading();
  let { handleError } = useErrorHandler();

  useEffect(() => {
    setTitleHasError('');
    setPriceHasError('');
    setDescriptionHasError('');
  }, [title, price, description]);

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
  let update_item = () => {
    if (!validate()) return;
    startLoading();
    new UpdateItemApi(
      id,
      { title, price, description },
      (response) => {
        stopLoading();
        navigate('/');
      },
      (error) => {
        stopLoading();
        handleError('Something went wrong');
      }
    ).run();
  };

  let validate = () => {
    let errors = 0;
    if (!title.length) {
      setTitleHasError('Please enter your title');
      errors++;
    }
    if (!price.length) {
      setPriceHasError('Please enter your price');
      errors++;
    }
    if (!description.length) {
      setDescriptionHasError('Please enter your description');
      errors++;
    }
    return !errors;
  };
  return (
    <Layout>
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
            defaultValue={title}
            placeholder='Title'
            className={cn(
              'w-full rounded-md border  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md',
              title_has_error.length ? 'border-red-400' : 'border-[#e0e0e0]'
            )}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className='text-red-600 text-xs sm:text-sm mt-1'>
            {title_has_error}
          </p>
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
            defaultValue={price}
            placeholder='100'
            className={cn(
              'w-full rounded-md border  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md',
              price_has_error.length ? 'border-red-400' : 'border-[#e0e0e0]'
            )}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p className='text-red-600 text-xs sm:text-sm mt-1'>
            {price_has_error}
          </p>
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
            defaultValue={description}
            placeholder='Type your description'
            className={cn(
              'w-full rounded-md border  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md',
              description_has_error.length
                ? 'border-red-400'
                : 'border-[#e0e0e0]'
            )}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p className='text-red-600 text-xs sm:text-sm mt-1'>
            {description_has_error}
          </p>
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
          <button
            type='button'
            onClick={update_item}
            className='hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none'
          >
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default EditProduct;
