export interface CategoryList {
  id: number;
  name: string;
  slug: string;
  size: number;
}

export interface Category {
  id: number;
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  products: CategoryProducts;
}

export interface CategoryProducts {
  data: CategoryProductsData[];
}

export interface CategoryProductsData {
  id: number;
  attributes: CategoryDataAttributes;
}

export interface CategoryDataAttributes {
  name: string;
  subtitle: string;
  price: number;
  description: string;
  size: Size;
  original_price: number;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Size {
  data: CategorySizeData[];
}

export interface CategorySizeData {
  size: string;
  enabled: boolean;
}
