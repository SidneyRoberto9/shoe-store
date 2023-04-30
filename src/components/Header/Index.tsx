import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';

import { Cart } from '@/components/Header/Icons/Cart';
import { Like } from '@/components/Header/Icons/Like';
import { Menu } from '@/components/Header/Menu';
import { MenuMobile } from '@/components/Header/MenuMobile';
import { Wrapper } from '@/components/Wrapper';

export function Header() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false);
  const [show, setShow] = useState<string>('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  function controlNavbar() {
    const Y = window.scrollY;

    if (Y > 200) {
      if (Y > lastScrollY && !mobileMenu) {
        setShow('-translate-y-[80px]');
      } else {
        setShow('shadow-sm');
      }
    } else {
      setShow('translate-y-0');
    }
    setLastScrollY(Y);
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href={'/'}>
          <img src="/svg/logo.svg" className="w-[40px] md:w-[60px]" />
        </Link>

        <Menu categoryMenu={showCategoryMenu} setCategoryMenu={setShowCategoryMenu} />

        {mobileMenu && (
          <MenuMobile
            categoryMenu={showCategoryMenu}
            setCategoryMenu={setShowCategoryMenu}
            setMobile={setMobileMenu}
          />
        )}

        <div className="flex items-center fap-2 text-black">
          <Link href={'/cart'}>
            <Cart size={51} />
          </Link>

          <Like size={5} />

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose className="text-[16px]" onClick={() => setMobileMenu(false)} />
            ) : (
              <BiMenuAltRight className="text-[20px]" onClick={() => setMobileMenu(true)} />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
