import React from 'react';
import sections from '../consts/sections';
import Overview from './overview/overview';
import Comments from './comments/comments';
import ProductsGrid from './products-grid';

function SectionLoader({ title, type, ...props }) {
  const getSection = (type, props) => {
    switch (type) {
      case sections.OVERVIEW:
        return <Overview {...props} />;
      case sections.COMMENTS:
        return <Comments {...props} />;
      case sections.PRODUCTS:
        return <ProductsGrid />;
      default:
        break;
    }
  };
  return (
    <div class='relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
      <div class='p-6'>
        <h5 class='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
          {title}
        </h5>
        {getSection(type, props)}
      </div>
    </div>
  );
}

export default SectionLoader;
