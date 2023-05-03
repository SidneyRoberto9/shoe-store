import { createContext, ReactNode, useContext } from 'react';

import { Product } from '@/@types/Product';
import { useLocalStorage } from '@/context/useLocalStorage';

interface WishListProps {
  wishList: Product[];
  wishSize: number;
  addToWishList: (data: Product) => void;
  removeFromWishList: (id: number) => void;
  isProductInWishList: (id: number) => boolean;
}

interface ContextProps {
  children: ReactNode;
}

const WishContext = createContext({} as WishListProps);

export function WishProvider({ children }: ContextProps) {
  const [wishList, setWishList] = useLocalStorage<Product[]>('@shoe-store:Wishlist', []);

  const wishSize: number = wishList.length;

  function addToWishList(data: Product) {
    if (!wishList.find((item) => item.id === data.id)) {
      setWishList((state) => [...state, data]);
    }
  }

  function removeFromWishList(id: number) {
    const newWishList = wishList.filter((item) => item.id !== id);

    setWishList(newWishList);
  }

  function isProductInWishList(id: number) {
    return wishList.some((item) => item.id === id);
  }

  return (
    <WishContext.Provider
      value={{ wishList, wishSize, addToWishList, isProductInWishList, removeFromWishList }}
    >
      {children}
    </WishContext.Provider>
  );
}

export function useWishList() {
  const context = useContext(WishContext);

  return context;
}
