import React from 'react';
import sections from '../consts/sections';
import Overview from './overview/overview';
import Comments from './comments/comments';
import ProductsGrid from './products-grid';

function SectionLoader({ type, ...props }) {
  const getSection = (type, props) => {
    switch (type) {
      case sections.OVERVIEW:
        return <Overview {...props} />;
      case sections.COMMENTS:
        return <Comments {...props} />;
      case sections.PRODUCTS:
        return <ProductsGrid {...props} />;
      default:
        break;
    }
  };
  return (
    <div class='relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
      <div class='p-6'>{getSection(type, props)}</div>
    </div>
  );
}

export default SectionLoader;
