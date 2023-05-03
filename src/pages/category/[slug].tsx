import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { Response } from '@/@types/api';
import { Category } from '@/@types/Category';
import { ProductCard } from '@/components/Product/ProductCard';
import { Wrapper } from '@/components/Wrapper';
import { fetchDataFromApi } from '@/server/api';

interface CategoryProps {
  category: any;
  products: any;
  slug: string;
}

const maxResult: number = 3;

export default function Category({ products, category, slug }: CategoryProps) {
  const [pageIndex, setPageIndex] = useState<number>(1);

  const categoryData = category.data[0];

  const { data, isLoading } = useSWR<Response>(
    `products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromApi,
    {
      fallback: products,
    },
  );

  const { query } = useRouter();

  useEffect(() => {
    setPageIndex(1);
  }, [query]);

  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:test-[34px] mb-5 font-semibold leading-tight">
            {categoryData.attributes.name}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {data &&
            data.data.map((product: any) => (
              <ProductCard key={product.id} attributes={product.attributes} />
            ))}
        </div>
      </Wrapper>

      {data && data.meta.pagination.total > maxResult && (
        <div className="flex gap-3 items-center justify-center my-16 md:my-0">
          <button
            className="min-w-[100px] rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500"
            disabled={pageIndex === 1}
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            Previous
          </button>

          <span className="font-bold">
            {`${pageIndex} of ${data && data.meta.pagination.pageCount}`}
          </span>

          <button
            className="min-w-[100px] rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500"
            disabled={pageIndex === (data && data.meta.pagination.pageCount)}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            Next
          </button>
        </div>
      )}

      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
          <img src="/svg/logo.svg" width={150} />
          <span className="text-2xl font-medium">Loading...</span>
        </div>
      )}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await fetchDataFromApi('categories?populate=*');

  const paths = data.map((category: Category) => ({
    params: { slug: category.attributes.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;

  const category = await fetchDataFromApi(`categories?filters[slug][$eq]=${slug}`);
  const products = await fetchDataFromApi(
    `products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=3`,
  );

  return {
    props: {
      category,
      products,
      slug,
    },
  };
};
