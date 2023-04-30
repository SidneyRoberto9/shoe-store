import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Carousel } from 'react-responsive-carousel';

import { ArrowNext, ArrowPrev } from '@/components/HeroBannerArrows';

export function HeroBanner() {
  const ShowNowClass: string =
    'px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90';

  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        interval={5000}
        renderArrowPrev={(clickHandler, hasPrev, label) =>
          ArrowPrev({ clickHandler, hasPrev, label })
        }
        renderArrowNext={(clickHandler, hasPrev, label) =>
          ArrowNext({ clickHandler, hasPrev, label })
        }
      >
        <div>
          <img src="/slide/slide-1.png" className="aspect-[16/10] md:aspect-auto" />
          <div className={ShowNowClass}>Shop now</div>
        </div>
        <div>
          <img src="/slide/slide-2.png" className="aspect-[16/10] md:aspect-auto" />
          <div className={ShowNowClass}>Shop now</div>
        </div>
        <div>
          <img src="/slide/slide-3.png" className="aspect-[16/10] md:aspect-auto" />
          <div className={ShowNowClass}>Shop now</div>
        </div>
      </Carousel>
    </div>
  );
}
