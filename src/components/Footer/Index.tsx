import { BottomGuides } from '@/components/Footer/BottomGuides';
import { Social } from '@/components/Footer/Social';
import { UtilLinks } from '@/components/Footer/UtilLinks';
import { Wrapper } from '@/components/Wrapper';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        <UtilLinks />
        <Social />
      </Wrapper>

      <BottomGuides />
    </footer>
  );
}
