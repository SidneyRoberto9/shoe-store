import { GetStaticProps } from 'next';

import { Product } from '@/@types/Product';
import { HeroBanner } from '@/components/Hero/HeroBanner';
import { ProductCard } from '@/components/Product/ProductCard';
import { Wrapper } from '@/components/Wrapper';
import { fetchDataFromApi } from '@/server/api';

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text=[34px] mb-5 font-semibold">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack heights to help
            provide cushioning during extended stretches of running.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products.map((product) => (
            <ProductCard key={product.id} attributes={product.attributes} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await fetchDataFromApi('products?populate=*');

  return {
    props: {
      products: data,
    },
  };
};
