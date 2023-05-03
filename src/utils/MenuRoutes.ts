import { RouteMenu } from '@/@types/MenuRoute';

export const routesMenu: RouteMenu[] = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'Categories', subMenu: true },
  { id: 3, name: 'About', url: '/about' },
];
