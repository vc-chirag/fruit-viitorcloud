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

export const TOTAL_PERCENT = 100;

export const DEFAULT_COLS = ['name'];
export const AVAILABLE_COLUMNS = [
  { label: 'Name', key: 'name' },
  { label: 'Age', key: 'age' },
  { label: 'Address', key: 'address' },
  { label: 'Email', key: 'email' },
  { label: 'Position', key: 'position' }
];

export const INNER_DATA_SOURCE = [
  { name: 'Alice Smith', age: 22, address: '9876 Elm St', email: 'alice@example.com', position: 'Analyst' },
  { name: 'Bob Johnson', age: 27, address: '3456 Oak St', email: 'bob@example.com', position: 'Developer' },
  { name: 'Carol White', age: 34, address: '6789 Pine St', email: 'carol@example.com', position: 'Manager' },
  { name: 'Dave Black', age: 29, address: '1234 Maple St', email: 'dave@example.com', position: 'Engineer' },
];

export const NESTED_DATA_SOURCE = [
  { name: 'Frank Green', age: 31, address: '4321 Cedar St', email: 'frank@example.com', position: 'Developer' },
  { name: 'Grace Turner', age: 28, address: '8765 Spruce St', email: 'grace@example.com', position: 'Analyst' },
  { name: 'Hank Wright', age: 26, address: '3456 Palm St', email: 'hank@example.com', position: 'Designer' },
  { name: 'Ivy Clark', age: 33, address: '6789 Redwood St', email: 'ivy@example.com', position: 'Manager' },
  { name: 'Jack Lewis', age: 30, address: '1234 Fir St', email: 'jack@example.com', position: 'Engineer' },
];

export const OUTER_DATA_SOURCE = [
  { name: 'Eve Brown', age: 24, address: '5678 Birch St', email: 'eve@example.com', position: 'Designer' },
  { name: 'Frank Green', age: 31, address: '4321 Cedar St', email: 'frank@example.com', position: 'Developer' },
  { name: 'Grace Turner', age: 28, address: '8765 Spruce St', email: 'grace@example.com', position: 'Analyst' },
  { name: 'Hank Wright', age: 26, address: '3456 Palm St', email: 'hank@example.com', position: 'Designer' },
  { name: 'Ivy Clark', age: 33, address: '6789 Redwood St', email: 'ivy@example.com', position: 'Manager' },
  { name: 'Jack Lewis', age: 30, address: '1234 Fir St', email: 'jack@example.com', position: 'Engineer' },
];

export const END_OF_DAY_HOURS = 23;
export const END_OF_DAY_MINUTES = 59;
export const END_OF_DAY_SECONDS = 59;
export const END_OF_DAY_MILLISECONDS = 999;
export const MINUTE_MILLISECONDS = 60000;
