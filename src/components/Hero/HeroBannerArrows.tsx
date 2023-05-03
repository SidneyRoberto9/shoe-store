import { BiArrowBack } from 'react-icons/bi';

interface ArrowProps {
  clickHandler: () => void;
  hasPrev: boolean;
  label: string;
}

export function ArrowPrev({ clickHandler, hasPrev, label }: ArrowProps) {
  return (
    <div
      onClick={clickHandler}
      className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
    >
      <BiArrowBack className="text-sm md:text-lg" />
    </div>
  );
}

export function ArrowNext({ clickHandler, hasPrev, label }: ArrowProps) {
  return (
    <div
      onClick={clickHandler}
      className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
    >
      <BiArrowBack className="rotate-180 text-sm md:text-lg" />
    </div>
  );
}
