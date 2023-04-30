export interface RouteMenu {
  id: number;
  name: string;
  url?: string;
  subMenu?: boolean;
}

export interface RouteSubMenu {
  id: number;
  name: string;
  doc_count: number;
}
