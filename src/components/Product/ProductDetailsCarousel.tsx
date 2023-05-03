import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Carousel } from 'react-responsive-carousel';

import { ProductImageData } from '@/@types/Product';

interface ProductDetailsCarouselProps {
  images: ProductImageData[];
}

export function ProductDetailsCarousel({ images }: ProductDetailsCarouselProps) {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map((image: ProductImageData) => (
          <img key={image.id} src={image.attributes.url} />
        ))}
      </Carousel>
    </div>
  );
}
