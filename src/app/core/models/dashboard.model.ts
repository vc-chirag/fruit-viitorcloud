export interface DashboardCounts {
  title: string;
  counts: string;
  key: string;
}

export interface CustomerElement {
  name: string;
  age: number;
  address: string;
  email: string;
  customerId: string;
}

export interface OrderElement {
  customerId: string,
  orderId: string,
  orderDate: string,
  price: number,
}

export interface ItemElement {
  orderId: string,
  itemId: string,
  itemName: string,
  price: number,
  quantity: number,
}
