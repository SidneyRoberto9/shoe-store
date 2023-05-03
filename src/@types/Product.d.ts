export interface ProductBaseResponse {
  id: number;
  attributes: Attributes;
}

export interface ProductAttributes {
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
  data: Datum[];
}

export interface Datum {
  size: string;
  enabled: boolean;
}
