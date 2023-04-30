import { Wrapper } from '@/components/Wrapper';

const bottomList: string[] = ['Guides', 'Terms of Sale', 'Terms of Use', 'Privacy Policy'];

export function BottomGuides() {
  return (
    <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
      <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
        © {new Date().getFullYear()} Nike, Inc. All Rights Reserved
      </div>

      <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
        {bottomList.map((item) => (
          <div key={item} className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            {item}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
