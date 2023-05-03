import { ReactNode } from 'react';

import { CategoryProvider } from '@/context/useCategory';
import { WishProvider } from '@/context/useWishList';

interface ContextProps {
  children: ReactNode;
}

export function Providers({ children }: ContextProps) {
  return (
    <CategoryProvider>
      <WishProvider>{children}</WishProvider>
    </CategoryProvider>
  );
}
