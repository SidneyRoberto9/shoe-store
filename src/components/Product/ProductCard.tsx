import Image from 'next/image';
import Link from 'next/link';

import { ProductAttributes } from '@/@types/Product';
import { formatPrice, getDiscountedPricePercentage } from '@/utils/helper';

interface ProductCardProps {
  attributes: ProductAttributes;
}

export function ProductCard({
  attributes: { thumbnail, slug, price, name, original_price },
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image width={500} height={500} src={thumbnail.data.attributes.url} alt={name} />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">{formatPrice(price)}</p>

          {original_price && (
            <>
              <p className="text-base font-medium line-through">{formatPrice(original_price)}</p>
              <p className="ml-auto text-base font-medium text-green-500">
                {`${getDiscountedPricePercentage(original_price, price)}% off`}
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
