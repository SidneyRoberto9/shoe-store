export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export interface ProductAttributes {
  name: string;
  subtitle: string;
  price: number;
  description: string;
  size: ProductSize;
  original_price: number;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  image: ProductImage;
  thumbnail: ProductThumbnail;
  categories: ProductCategories;
}

export interface ProductCategories {
  data: ProductCategoriesData[];
}

export interface ProductCategoriesData {
  id: number;
  attributes: ProductPurpleAttributes;
}

export interface ProductPurpleAttributes {
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface ProductImage {
  data: ProductImageData[];
}

export interface ProductImageData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: PurpleFormats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export enum EXT {
  Webp = '.webp',
}

export interface PurpleFormats {
  large: Small;
  small: Small;
  medium: Small;
  thumbnail: Small;
}

export interface Small {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export enum MIME {
  ImageWebp = 'image/webp',
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = 'image',
}

export interface ProductSize {
  data: SizeData[];
}

export interface SizeData {
  size: string;
  enabled: boolean;
}

export interface Thumbnail {
  data: Data;
}

export interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: FluffyFormats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface FluffyFormats {
  small: Small;
  thumbnail: Small;
}
