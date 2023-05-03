export interface ProductPopulateResponse {
  id: number;
  attributes: ProductPopulateAttributes;
}

export interface ProductPopulateAttributes {
  name: string;
  subtitle: string;
  price: number;
  description: string;
  size: ProductPopulateSize;
  original_price: number;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  image: ProductPopulateImage;
  thumbnail: ProductPopulateThumbnail;
  categories: ProductPopulateCategories;
}

export interface ProductPopulateCategories {
  data: ProductPopulateCategoriesDatum[];
}

export interface ProductPopulateCategoriesDatum {
  id: number;
  attributes: ProductPopulatePurpleAttributes;
}

export interface ProductPopulatePurpleAttributes {
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface ProductPopulateImage {
  data: ProductPopulateImageDatum[];
}

export interface ProductPopulateImageDatum {
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

export interface ProductPopulateSize {
  data: SizeDatum[];
}

export interface SizeDatum {
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
