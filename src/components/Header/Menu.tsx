import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';

import { routesMenu, subMenuData } from '@/data/MenuRoutes';

interface MenuProps {
  categoryMenu: boolean;
  setCategoryMenu: (value: boolean) => void;
}

export function Menu({ categoryMenu, setCategoryMenu }: MenuProps) {
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
                  {subMenuData.map(({ id, name, doc_count }) => (
                    <Link
                      key={id}
                      href={`/category/${name}`}
                      onClick={() => setCategoryMenu(false)}
                    >
                      <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                        {name}
                        <span className="opacity-50 text-sm">{doc_count}</span>
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
