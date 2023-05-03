import { ProductCard } from '@/components/Product/ProductCard';
import { Wrapper } from '@/components/Wrapper';
import { useWishList } from '@/context/useWishList';

export default function WishList() {
  const { wishList } = useWishList();

  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:test-[34px] mb-5 font-semibold leading-tight">
            WishList
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {wishList.map((product) => (
            <ProductCard key={product.id} attributes={product.attributes} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
