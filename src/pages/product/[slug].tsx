import 'react-toastify/dist/ReactToastify.css';

import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { toast, ToastContainer } from 'react-toastify';

import { Response } from '@/@types/api';
import { Product } from '@/@types/Product';
import { ProductDetailsCarousel } from '@/components/Product/ProductDetailsCarousel';
import { RelatedProducts } from '@/components/Product/RelatedProducts';
import { Wrapper } from '@/components/Wrapper';
import { fetchDataFromApi } from '@/server/api';
import { addToCart } from '@/store/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { formatPrice, getDiscountedPricePercentage } from '@/utils/helper';

interface ProductDetailsProps {
  product: Response<Product>;
  products: Response<Product>;
}

export default function ProductDetails({ product, products }: ProductDetailsProps) {
  const dispatch = useAppDispatch();

  const [selectSize, setSelectSize] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const productContent = product.data[0];
  const productData = productContent.attributes;
  const productImageData = productData.image.data;
  const productSizeData = productData.size.data;

  function notify() {
    toast.success('Success. Check your cart!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    });
  }

  function selectSizeThrowError() {
    setShowError(true);
    document.getElementById('sizesGrid')?.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
    });
  }

  function selectSizeIsDisabled(itemSize: string) {
    productSizeData.forEach((size) => {
      if (size.size === itemSize) {
        if (size.enabled == false) {
          setSelectSize('');
        }
      }
    });
  }

  function addProductToCart() {
    dispatch(
      addToCart({
        ...productContent,
        selectSize,
        oneQuantityPrice: productData.price,
      }),
    );
    notify();
  }

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={productImageData} />
          </div>

          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-normal">{productData.name}</div>
            <div className="text-lg font-semibold mb-5">{productData.subtitle}</div>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">{formatPrice(productData.price)}</p>
              {productData.original_price && (
                <>
                  <p className="text-base font-medium line-through">
                    {formatPrice(productData.original_price)}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {`${getDiscountedPricePercentage(
                      productData.original_price,
                      productData.price,
                    )}% off`}
                  </p>
                </>
              )}
            </div>
            <div className="text-md font-medium text-black/[0.5]">incl. of taxes</div>
            <div className="text-md font-medium text-black/[0.5] mb-20">{`(Also includes all appplicable duties)`}</div>

            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>

              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {productSizeData.map((item, index: number) => (
                  <div
                    key={index}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? 'hover:border-black cursor-pointer'
                        : 'cursor-not-allowed bg-black/[0.1] opacity-50'
                    } ${selectSize === item.size && 'border-black'}`}
                    onClick={() => {
                      setSelectSize(item.size);
                      selectSizeIsDisabled(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>

              {showError && <div className="text-red-600 mt-1">Size selection is required</div>}
            </div>

            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectSize) {
                  selectSizeThrowError();
                } else {
                  addProductToCart();
                }
              }}
            >
              Add to Cart
            </button>

            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>{productData.description}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        <RelatedProducts products={products.data} />
        <ToastContainer />
      </Wrapper>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await fetchDataFromApi('products?populate=*');

  const paths = data.map((product: Product) => ({
    params: { slug: product.attributes.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;

  const product = await fetchDataFromApi(`products?populate=*&filters[slug][$eq]=${slug}`);

  const products = await fetchDataFromApi(`products?populate=*&[filters][slug][$ne]=${slug}`);

  return {
    props: {
      product,
      products,
    },
  };
};
