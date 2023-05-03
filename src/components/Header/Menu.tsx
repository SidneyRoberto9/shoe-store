import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';

import { CategoryPopulateResponse } from '@/@types/CategoryPopulate';
import { routesMenu } from '@/data/MenuRoutes';

interface MenuProps {
  categoryMenu: boolean;
  setCategoryMenu: (value: boolean) => void;
  categories: CategoryPopulateResponse[];
}

export function Menu({ categoryMenu, setCategoryMenu, categories }: MenuProps) {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {routesMenu.map(({ id, name, subMenu, url }) => (
        <span key={id}>
          {subMenu ? (
            <li
              className="cursor-pointer flex items-center gap-2 relative"
              onMouseEnter={() => setCategoryMenu(true)}
              onMouseLeave={() => setCategoryMenu(false)}
            >
              {name}
              <BsChevronDown />

              {categoryMenu && (
                <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 text-black shadow-lg">
                  {categories.map(({ id, attributes: { slug, name, products } }) => (
                    <Link
                      key={id}
                      href={`/category/${slug}`}
                      onClick={() => setCategoryMenu(false)}
                    >
                      <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                        {name}
                        <span className="opacity-50 text-sm">{`(${products.data.length})`}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer">
              <Link href={url || ''}>{name}</Link>
            </li>
          )}
        </span>
      ))}
    </ul>
  );
}
