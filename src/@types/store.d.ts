export interface CounterState {
  cartItems: any[];
}

export interface AddToCartPayload {
  id: number;
  attributes: any;
  selectSize: string;
  oneQuantityPrice: number;
}

export interface UpdateCartPayload {
  id: string;
  val: string | number;
  key: string;
}

export interface RemoveFromCartPayload {
  id: string;
}
