import { RouteMenu, RouteSubMenu } from '@/@types/MenuRoute';

export const routesMenu: RouteMenu[] = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Categories', subMenu: true },
  { id: 4, name: 'Contact', url: '/contact' },
];

export const subMenuData: RouteSubMenu[] = [
  { id: 1, name: 'Jordan', doc_count: 11 },
  { id: 2, name: 'Sneakers', doc_count: 8 },
  { id: 3, name: 'Running shoes', doc_count: 64 },
  { id: 4, name: 'Football shoes', doc_count: 107 },
];
