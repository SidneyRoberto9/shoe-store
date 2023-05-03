import 'react-multi-carousel/lib/styles.css';

import Carousel from 'react-multi-carousel';

import { ProductCard } from '@/components/ProductCard';

import { ProductPopulateResponse } from '../@types/ProductPopulate';

interface RelatedProductsProps {
  products: ProductPopulateResponse[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <Carousel responsive={responsive} containerClass="-mx-[10px]" itemClass="px-[10px]">
        {products.map((product) => (
          <ProductCard key={product.id} attributes={product.attributes} />
        ))}
      </Carousel>
    </div>
  );
}
