import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';

import { CategoryPopulateResponse } from '@/@types/CategoryPopulate';
import { routesMenu } from '@/data/MenuRoutes';

interface MenuProps {
  categoryMenu: boolean;
  setCategoryMenu: (value: boolean) => void;
  setMobile: (value: boolean) => void;
  categories: CategoryPopulateResponse[];
}

export function MenuMobile({ categoryMenu, setCategoryMenu, setMobile, categories }: MenuProps) {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {routesMenu.map(({ id, name, subMenu, url }) => (
        <span key={id}>
          {subMenu ? (
            <li
              className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
              onClick={() => setCategoryMenu(!categoryMenu)}
            >
              <div className="flex justify-between items-center">
                {name}
                <BsChevronDown />
              </div>

              {categoryMenu && (
                <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                  {categories.map(({ id, attributes: { slug, name, products } }) => (
                    <Link
                      key={id}
                      href={`/category/${slug}`}
                      onClick={() => {
                        setCategoryMenu(false);
                        setMobile(false);
                      }}
                    >
                      <li className="py-4 px-8 border-t flex justify-between">
                        {name}
                        <span className="opacity-50 text-sm">{`(${products.data.length})`}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="py-4 px-5 border-b">
              <Link href={url || ''} onClick={() => setMobile(false)}>
                {name}
              </Link>
            </li>
          )}
        </span>
      ))}
    </ul>
  );
}
