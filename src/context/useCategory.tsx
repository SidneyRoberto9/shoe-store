import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

import { Category, CategoryList } from '../@types/Category';
import { fetchDataFromApi } from '../server/api';

interface CategoryProps {
  categories: CategoryList[];
}

interface ContextProps {
  children: ReactNode;
}

const categoryContext = createContext({} as CategoryProps);

export function CategoryProvider({ children }: ContextProps) {
  const [category, setCategory] = useState<Category[]>([]);

  const categories = useCallback(() => {
    const categories = category.map((category) => {
      return {
        id: category.id,
        name: category.attributes.name,
        slug: category.attributes.slug,
        size: category.attributes.products.data.length,
      } satisfies CategoryList;
    });

    return categories;
  }, [category]);

  async function fetchCategories() {
    const { data } = await fetchDataFromApi('categories?populate=*');

    setCategory(data);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <categoryContext.Provider value={{ categories: categories() }}>
      {children}
    </categoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(categoryContext);

  return context;
}
