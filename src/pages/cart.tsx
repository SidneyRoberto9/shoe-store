import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { CartItem } from '@/components/CartItem';
import { Wrapper } from '@/components/Wrapper';
import { makePaymentRequest } from '@/server/api';
import { stripePromise } from '@/server/stripe';
import { useAppSelector } from '@/store/hooks';
import { formatPrice } from '@/utils/helper';

import { EmptyCart } from '../components/EmptyCart';

export default function cart() {
  const [loading, setLoading] = useState<boolean>(false);
  const { cartItems } = useAppSelector((state) => state.cart);

  const isCartEmpty = useMemo(() => cartItems.length < 1, [cartItems]);

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.attributes.price, 0);
  }, [cartItems]);

  async function handlePayment() {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest('orders', {
        products: cartItems,
      });

      if (stripe) {
        await stripe.redirectToCheckout({
          sessionId: res.stripeSession.id,
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {isCartEmpty && <EmptyCart />}
        {!isCartEmpty && (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((item, index) => (
                  <CartItem key={index} data={item} />
                ))}
              </div>

              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      {formatPrice(subTotal)}
                    </div>
                  </div>

                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    The subtotal reflects the total price of your order, including duties and taxes,
                    before any applicable discounts. It does not include delivery costs and
                    international transaction fees.
                  </div>
                </div>

                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  onClick={handlePayment}
                >
                  Checkout
                  {loading && <img src="/svg/spinner.svg" />}
                </button>
              </div>
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
}
