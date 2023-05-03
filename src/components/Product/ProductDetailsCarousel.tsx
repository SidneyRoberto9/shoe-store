import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Carousel } from 'react-responsive-carousel';

import { ProductPopulateImageDatum } from '@/@types/ProductPopulate';

interface ProductDetailsCarouselProps {
  images: ProductPopulateImageDatum[];
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
        {images?.map((image: ProductPopulateImageDatum) => (
          <img key={image.id} src={image.attributes.url} />
        ))}
      </Carousel>
    </div>
  );
}
