/* eslint-disable max-len, no-magic-numbers */

export const LANGUAGES = [
  { value: 'en_US', label: 'English', flagUrl: '/assets/images/flags/en.svg' },
  // { value: 'de_CH', label: 'German', flagUrl: '/assets/images/flags/de.svg' },
  { value: 'it_IT', label: 'Italian', flagUrl: '/assets/images/flags/it.svg' }
] as const;

export const APP = {
  PAGE_OPTIONS: [5, 10, 50, 100],
  PAGE_SIZE: 10,
  PAGE_INDEX: 1,
  TIME_DELAY: 1500,
  DEBOUNCE_TIME: 500,
  LOGOUT: 'logout',
  MIN_SEARCH_LEN: 4,
  TIMEOUT: 0,
  LANGUAGE: LANGUAGES[1].value,
  IMAGE_TYPE: ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'],
  MAX_IMAGE_SIZE: 5242880, // 5MB
  CURRENCY_SYMBOL: '$',
  DIALOG_WIDTH: '400px',
  POPUP_WIDTH: '1024px',
  BYTES_PER_KB: 1024,
  DESCRIPTION_MAX_LENGTH: 100
};

export const REGEX = {
  EMAIL:
    /^[\p{L}\d!#$%&'*+=?^_`{|}~-]+(?:\.[\p{L}\d!#$%&'*+=?^_`{|}~-]+)*@(?:[_\p{L}\d][-_\p{L}\d]*\.)*(?:[\p{L}\d][-\p{L}\d]{0,62})\.(?:(?:[a-z]{2}\.)?[a-z]{2,})$/iu,
  PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,16}$/,
  INTEGER: /^\d*$/,
  DECIMAL: /^\d*\.?\d*$/
};

export const SORT_OPTIONS = [
  { value: 'desc', label: 'descending' },
  { value: 'asc', label: 'ascending' }
];

export const STATUS = [
  { value: true, label: 'Active' },
  { value: false, label: 'Inactive' }
];

export const TRUE_FALSE_OPTIONS = [
  { value: true, label: 'True' },
  { value: false, label: 'False' }
];

export const YES_NO_OPTIONS = [
  { value: true, label: 'Yes' },
  { value: false, label: 'No' }
];

export const MEDIA_EXTENSION = {
  IMAGE: 'jpeg, jpg, png and webp'
};

export const MEDIA_SIZE = {
  IMAGE: 5
};

export const MEDIA_RATIO = {
  HOME_LOGO: '64x54',
  HEADING: '330x200'
};

export enum MAT_TABS {
  DASHBOARD,
  DYNAMIC_TABLE,
  PIVOT_TABLE
}

export enum TABLE_LEVELS {
  ONE,
  TWO,
  THREE
}

export const CUSTOMER_COLUMNS = [
  { label: 'Name', key: 'name' },
  { label: 'Age', key: 'age' },
  { label: 'Address', key: 'address' },
  { label: 'Email', key: 'email' },
  { label: 'customer ID', key: 'customerId' },
];

export const ORDER_COLUMNS = [
  { label: 'Customer ID', key: 'customerId' },
  { label: 'Order ID', key: 'orderId' },
  { label: 'Order Date', key: 'orderDate' },
  { label: 'Price', key: 'price' }
];

export const ITEM_COLUMNS = [
  { label: 'Order ID', key: 'orderId' },
  { label: 'Item ID', key: 'itemId' },
  { label: 'Product Name', key: 'productName' },
  { label: 'Quantity', key: 'quantity' },
  { label: 'Price', key: 'price' }
]

export const ITEM_DATA_SOURCE = [
  { orderId: '5d2c8bf1f3d0', itemId: '8e4e0febc6f2', productName: 'Widget A', quantity: 1, price: 10.00 },
  { orderId: '4ab4d2560eb6', itemId: '3d9bb27b21c5', productName: 'Widget B', quantity: 1, price: 20.00 },
  { orderId: '8b0d1b12f890', itemId: '6a9d0f7e1f8a', productName: 'Gadget C', quantity: 3, price: 15.00 },
  { orderId: '30f3d13ef0d9', itemId: '8eddecd2e4a2', productName: 'Thingamajig D', quantity: 4, price: 12.50 },
  { orderId: '30f3d13ef0d9', itemId: '8d86a7f8f6f1', productName: 'Widget A', quantity: 1, price: 10.00 },
  { orderId: 'bc057c9d7b7a', itemId: '1bc6f9ab4e8f', productName: 'Gadget C', quantity: 2, price: 15.00 },
  { orderId: 'bc057c9d7b7a', itemId: 'c176f1d2b125', productName: 'Thingamajig D', quantity: 1, price: 12.50 },
  { orderId: '5e4c8c0a3253', itemId: 'dfb9c299ee3b', productName: 'Gadget A', quantity: 3, price: 18.00 },
  { orderId: '5e4c8c0a3253', itemId: '77c32c04340b', productName: 'Widget B', quantity: 2, price: 20.00 },
];

export const ORDER_DATA_SOURCE = [
  { customerId: '57c2eb1a8a5a', orderId: '5d2c8bf1f3d0', orderDate: '2023-01-15', price: 10.00 },
  { customerId: '57c2eb1a8a5a', orderId: '4ab4d2560eb6', orderDate: '2023-01-15', price: 20.00 },
  { customerId: '5b8db7f66cf6', orderId: '8b0d1b12f890', orderDate: '2023-03-22', price: 15.00 },
  { customerId: '3e895a3f03c7', orderId: '30f3d13ef0d9', orderDate: '2023-05-10', price: 12.50 },
  { customerId: '3e895a3f03c7', orderId: '30f3d13ef0d9', orderDate: '2023-05-10', price: 10.00 },
  { customerId: '55d0a04c460b', orderId: 'bc057c9d7b7a', orderDate: '2023-06-27', price: 15.00 },
  { customerId: '55d0a04c460b', orderId: 'bc057c9d7b7a', orderDate: '2023-06-27', price: 12.50 },
  { customerId: '7b9c4d3b6dd4', orderId: '5e4c8c0a3253', orderDate: '2023-08-15', price: 18.00 },
  { customerId: '7b9c4d3b6dd4', orderId: '5e4c8c0a3253', orderDate: '2023-08-15', price: 20.00 },
];

export const CUSTOMER_DATA_SOURCE = [
  { name: 'Eve Brown', age: 24, address: '5678 Birch St', email: 'eve@example.com', customerId: '57c2eb1a8a5a' },
  { name: 'Frank Green', age: 31, address: '4321 Cedar St', email: 'frank@example.com', customerId: '5b8db7f66cf6' },
  { name: 'Grace Turner', age: 28, address: '8765 Spruce St', email: 'grace@example.com', customerId: '3e895a3f03c7' },
  { name: 'Hank Wright', age: 26, address: '3456 Palm St', email: 'hank@example.com', customerId: '55d0a04c460b' },
  { name: 'Ivy Clark', age: 33, address: '6789 Redwood St', email: 'ivy@example.com', customerId: '7b9c4d3b6dd4' },
];

export const END_OF_DAY_HOURS = 23;
export const END_OF_DAY_MINUTES = 59;
export const END_OF_DAY_SECONDS = 59;
export const END_OF_DAY_MILLISECONDS = 999;
export const MINUTE_MILLISECONDS = 60000;
