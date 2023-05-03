export interface CategoryPopulateResponse {
  id: number;
  attributes: CategoryPopulateResponseAttributes;
}

export interface CategoryPopulateResponseAttributes {
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  products: CategoryPopulateProducts;
}

export interface CategoryPopulateProducts {
  data: CategoryPopulateProductsDatum[];
}

export interface CategoryPopulateProductsDatum {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
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
  data: SizeDatum[];
}

export interface SizeDatum {
  size: string;
  enabled: boolean;
}
