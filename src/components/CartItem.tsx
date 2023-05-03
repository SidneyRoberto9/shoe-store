import Image from 'next/image';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { removeFromCart, updateCart } from '@/store/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { formatPrice } from '@/utils/helper';

interface CartItemProps {
  data: any;
}

export function CartItem({ data }: CartItemProps) {
  const productAttributes = data.attributes;
  const thumbnailUrl = productAttributes.thumbnail.data.attributes.url;
  const productSize = productAttributes.size.data;

  const dispatch = useAppDispatch();

  function updateCartItem(item: any, key: string) {
    let payload = {
      key,
      val: key === 'quantity' ? parseInt(item.target.value) : item.target.value,
      id: data.id,
    };

    dispatch(updateCart(payload));
  }

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image width={120} height={120} src={thumbnailUrl} alt={productAttributes.name} />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {productAttributes.name}
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {productAttributes.subtitle}
          </div>

          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            {formatPrice(productAttributes.price)}
          </div>
        </div>

        <div className="text--md font-medium text-black/[0.5] hidden md:block">
          {productAttributes.subtitle}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, 'selectSize')}
              >
                {productSize.map((item: any, index: number) => (
                  <option
                    key={index}
                    value={item.size}
                    disabled={!item.enabled ? true : false}
                    selected={item.size === data.selectSize}
                  >
                    {item.size}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black" onChange={(e) => updateCartItem(e, 'quantity')}>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((item, index) => (
                  <option key={index} value={item} selected={data.quantity === item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
          />
        </div>
      </div>
    </div>
  );
}
