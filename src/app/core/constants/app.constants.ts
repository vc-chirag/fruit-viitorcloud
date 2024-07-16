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
  { value: 'desc', label: 'Desc' },
  { value: 'asc', label: 'Asc' }
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

export const ORDER_COL = [
  {
    key: "Chiave",
    label: "order.chiave",
    sortable: true
  },
  {
    key: "NumDoc",
    label: "order.numDoc",
    sortable: true
  },
  {
    key: "SerieDoc",
    label: "order.serieDoc",
    sortable: true
  },
  {
    key: "AnnoDoc",
    label: "order.annoDoc",
    sortable: true
  },
  {
    key: "MeseDoc",
    label: "order.meseDoc",
    sortable: true
  },
  {
    key: "RigaDoc",
    label: "order.rigaDoc",
    sortable: true
  },
  {
    key: "DataDoc",
    label: "order.dataDoc",
    sortable: true
  },
  {
    key: "Segno",
    label: "order.segno",
    sortable: true
  },
  {
    key: "CodAnagra",
    label: "order.codAnagra",
    sortable: true
  },
  {
    key: "CodDestDiv",
    label: "order.codDestDiv",
    sortable: true
  },
  {
    key: "DescrDestDiv",
    label: "order.descrDestDiv",
    sortable: true
  },
  {
    key: "IndirizzoDestDiv",
    label: "order.indirizzoDestDiv",
    sortable: true
  },
  {
    key: "CittaDestDiv",
    label: "order.cittaDestDiv",
    sortable: true
  },
  {
    key: "DescrProvDestDiv",
    label: "order.descrProvDestDiv",
    sortable: true
  },
  {
    key: "DescrNazioneDestDiv",
    label: "order.DdscrNazioneDestDiv",
    sortable: true
  },
  {
    key: "CodAgente",
    label: "order.codAgente",
    sortable: true
  },
  {
    key: "CodArtico",
    label: "order.codArtico",
    sortable: true
  },
  {
    key: "DescrArtico",
    label: "order.descrArtico",
    sortable: true
  },
  {
    key: "NoteRiga",
    label: "order.noteRiga",
    sortable: true
  },
  {
    key: "UM",
    label: "order.uM",
    sortable: true
  },
  {
    key: "DescrGruppo",
    label: "order.descrGruppo",
    sortable: true
  },
  {
    key: "DescrSottogruppo",
    label: "order.descrSottogruppo",
    sortable: true
  },
  {
    key: "DescrCategoria",
    label: "order.descrCategoria",
    sortable: true
  },
  {
    key: "Colli",
    label: "order.colli",
    sortable: true
  },
  {
    key: "Qta",
    label: "order.qta",
    sortable: true
  },
  {
    key: "Prezzo",
    label: "order.prezzo",
    sortable: true
  },
  {
    key: "ValoreRiga",
    label: "order.valoreRiga",
    sortable: true
  },
  {
    key: "ValoreIVA",
    label: "order.valoreIVA",
    sortable: true
  },
  {
    key: "AliquotaIVA",
    label: "order.aliquotaIVA",
    sortable: true
  },
  {
    key: "Sconto1",
    label: "order.sconto1",
    sortable: true
  },
  {
    key: "Sconto2",
    label: "order.sconto2",
    sortable: true
  },
  {
    key: "Sconto3",
    label: "order.sconto3",
    sortable: true
  },
  {
    key: "ScontoPagamento",
    label: "order.scontoPagamento",
    sortable: true
  },
  {
    key: "ScontoTestata",
    label: "order.scontoTestata",
    sortable: true
  },
  {
    key: "DescrIVA",
    label: "order.descrIVA",
    sortable: true
  },
  {
    key: "PercProv1",
    label: "order.percProv1",
    sortable: true
  },
  {
    key: "PercProv2",
    label: "order.percProv2",
    sortable: true
  },
  {
    key: "ValoreProv1",
    label: "order.valoreProv1",
    sortable: true
  },
  {
    key: "ValoreProv2",
    label: "order.valoreProv2",
    sortable: true
  },
  {
    key: "NumFatt",
    label: "order.numFatt",
    sortable: true
  },
  {
    key: "SerieFatt",
    label: "order.serieFatt",
    sortable: true
  },
  {
    key: "AnnoFatt",
    label: "order.annoFatt",
    sortable: true
  },
  {
    key: "NumDDT",
    label: "order.numDDT",
    sortable: true
  },
  {
    key: "SerieDDT",
    label: "order.serieDDT",
    sortable: true
  },
  {
    key: "AnnoDDT",
    label: "order.annoDDT",
    sortable: true
  },
  {
    key: "CodGruppo",
    label: "order.codGruppo",
    sortable: true
  },
  {
    key: "CodSottogruppo",
    label: "order.codSottogruppo",
    sortable: true
  },
  {
    key: "CodIVA",
    label: "order.codIVA",
    sortable: true
  },
  {
    key: "CodCategoria",
    label: "order.codCategoria",
    sortable: true
  }
];

export const REGISTRY_COL = [
  {
    key: "codanagra",
    label: "registry.codanagra",
    sortable: true
  },
  {
    key: "tipo",
    label: "registry.tipo",
    sortable: true
  },
  {
    key: "descranagra",
    label: "registry.descranagra",
    sortable: true
  },
  {
    key: "piva",
    label: "registry.piva",
    sortable: true
  },
  {
    key: "cf",
    label: "registry.cf",
    sortable: true
  },
  {
    key: "isonazione",
    label: "registry.isonazione",
    sortable: true
  },
  {
    key: "descrnazione",
    label: "registry.descrnazione",
    sortable: true
  },
  {
    key: "cap",
    label: "registry.cap",
    sortable: true
  },
  {
    key: "citta",
    label: "registry.citta",
    sortable: true
  },
  {
    key: "descrprovincia",
    label: "registry.descrprovincia",
    sortable: true
  },
  {
    key: "indirizzo",
    label: "registry.indirizzo",
    sortable: true
  },
  {
    key: "telefono",
    label: "registry.telefono ",
    sortable: true
  },
  {
    key: "telefono2",
    label: "registry.telefono2",
    sortable: true
  },
  {
    key: "mail",
    label: "registry.mail",
    sortable: true
  },
  {
    key: "mail2",
    label: "registry.mail2",
    sortable: true
  }
];

export const DDT_OUT_COL = [
  {
    key: "Chiave",
    label: "ddt.chiave",
    sortable: true
  },
  {
    key: "NumDoc",
    label: "ddt.numDoc",
    sortable: true
  },
  {
    key: "SerieDoc",
    label: "ddt.serieDoc",
    sortable: true
  },
  {
    key: "AnnoDoc",
    label: "ddt.annoDoc",
    sortable: true
  },
  {
    key: "MeseDoc",
    label: "ddt.meseDoc",
    sortable: true
  },
  {
    key: "RigaDoc",
    label: "ddt.rigaDoc",
    sortable: true
  },
  {
    key: "DataDoc",
    label: "ddt.dataDoc",
    sortable: true
  },
  {
    key: "Segno",
    label: "ddt.segno",
    sortable: true
  },
  {
    key: "CodAnagra",
    label: "ddt.codAnagra",
    sortable: true
  },
  {
    key: "CodDestDiv",
    label: "ddt.codDestDiv",
    sortable: true
  },
  {
    key: "DescrDestDiv",
    label: "ddt.descrDestDiv",
    sortable: true
  },
  {
    key: "IndirizzoDestDiv",
    label: "ddt.indirizzoDestDiv",
    sortable: true
  },
  {
    key: "CittaDestDiv",
    label: "ddt.cittaDestDiv",
    sortable: true
  },
  {
    key: "DescrProvDestDiv",
    label: "ddt.descrProvDestDiv",
    sortable: true
  },
  {
    key: "DescrNazioneDestDiv",
    label: "ddt.descrNazioneDestDiv",
    sortable: true
  },
  {
    key: "CodAgente",
    label: "ddt.codAgente",
    sortable: true
  },
  {
    key: "CodArtico",
    label: "ddt.codArtico",
    sortable: true
  },
  {
    key: "DescrArtico",
    label: "ddt.descrArtico",
    sortable: true
  },
  {
    key: "NoteRiga",
    label: "ddt.noteRiga",
    sortable: true
  },
  {
    key: "UM",
    label: "ddt.um",
    sortable: true
  },
  {
    key: "DescrGruppo",
    label: "ddt.descrGruppo",
    sortable: true
  },
  {
    key: "DescrSottogruppo",
    label: "ddt.descrSottogruppo",
    sortable: true
  },
  {
    key: "DescrCategoria",
    label: "ddt.descrCategoria",
    sortable: true
  },
  {
    key: "Colli",
    label: "ddt.colli",
    sortable: true
  },
  {
    key: "Qta",
    label: "ddt.qta",
    sortable: true
  },
  {
    key: "Prezzo",
    label: "ddt.prezzo",
    sortable: true
  },
  {
    key: "ValoreRiga",
    label: "ddt.valoreRiga",
    sortable: true
  },
  {
    key: "ValoreIVA",
    label: "ddt.valoreIVA",
    sortable: true
  },
  {
    key: "AliquotaIVA",
    label: "ddt.aliquotaIVA",
    sortable: true
  },
  {
    key: "Sconto1",
    label: "ddt.sconto1",
    sortable: true
  },
  {
    key: "Sconto2",
    label: "ddt.sconto2",
    sortable: true
  },
  {
    key: "Sconto3",
    label: "ddt.sconto3",
    sortable: true
  },
  {
    key: "ScontoPagamento",
    label: "ddt.scontoPagamento",
    sortable: true
  },
  {
    key: "ScontoTestata",
    label: "ddt.scontoTestata",
    sortable: true
  },
  {
    key: "DescrIVA",
    label: "ddt.descrIVA",
    sortable: true
  },
  {
    key: "PercProv1",
    label: "ddt.percProv1",
    sortable: true
  },
  {
    key: "PercProv2",
    label: "ddt.percProv2",
    sortable: true
  },
  {
    key: "ValoreProv1",
    label: "ddt.valoreProv1",
    sortable: true
  },
  {
    key: "ValoreProv2",
    label: "ddt.valoreProv2",
    sortable: true
  },
  {
    key: "NumFatt",
    label: "ddt.numFatt",
    sortable: true
  },
  {
    key: "SerieFatt",
    label: "ddt.serieFatt",
    sortable: true
  },
  {
    key: "AnnoFatt",
    label: "ddt.annoFatt",
    sortable: true
  },
  {
    key: "NumOrdine",
    label: "ddt.numOrdine",
    sortable: true
  },
  {
    key: "SerieOrdine",
    label: "ddt.serieOrdine",
    sortable: true
  },
  {
    key: "AnnoOrdine",
    label: "ddt.annoOrdine",
    sortable: true
  },
  {
    key: "CodGruppo",
    label: "ddt.codGruppo",
    sortable: true
  },
  {
    key: "CodSottogruppo",
    label: "ddt.codSottogruppo",
    sortable: true
  },
  {
    key: "CodIVA",
    label: "ddt.codIVA",
    sortable: true
  },
  {
    key: "CodCategoria",
    label: "ddt.codCategoria",
    sortable: true
  }
];

export const INVOICE_COL = [
  {
    key: "Chiave",
    label: "ddt.chiave",
    sortable: true
  },
  {
    key: "NumDoc",
    label: "ddt.numDoc",
    sortable: true
  },
  {
    key: "SerieDoc",
    label: "ddt.serieDoc",
    sortable: true
  },
  {
    key: "AnnoDoc",
    label: "ddt.annoDoc",
    sortable: true
  },
  {
    key: "MeseDoc",
    label: "ddt.meseDoc",
    sortable: true
  },
  {
    key: "RigaDoc",
    label: "ddt.rigaDoc",
    sortable: true
  },
  {
    key: "DataDoc",
    label: "ddt.dataDoc",
    sortable: true
  },
  {
    key: "DataCompetenza",
    label: "ddt.dataCompetenza",
    sortable: true
  },
  {
    key: "Segno",
    label: "ddt.segno",
    sortable: true
  },
  {
    key: "CodAnagra",
    label: "ddt.codAnagra",
    sortable: true
  },
  {
    key: "CodDestDiv",
    label: "ddt.codDestDiv",
    sortable: true
  },
  {
    key: "DescrDestDiv",
    label: "ddt.descrDestDiv",
    sortable: true
  },
  {
    key: "IndirizzoDestDiv",
    label: "ddt.indirizzoDestDiv",
    sortable: true
  },
  {
    key: "CittaDestDiv",
    label: "ddt.cittaDestDiv",
    sortable: true
  },
  {
    key: "DescrProvDestDiv",
    label: "ddt.descrProvDestDiv",
    sortable: true
  },
  {
    key: "DescrNazioneDestDiv",
    label: "ddt.descrNazioneDestDiv",
    sortable: true
  },
  {
    key: "CodAgente",
    label: "ddt.codAgente",
    sortable: true
  },
  {
    key: "CodArtico",
    label: "ddt.codArtico",
    sortable: true
  },
  {
    key: "DescrArtico",
    label: "ddt.descrArtico",
    sortable: true
  },
  {
    key: "NoteRiga",
    label: "ddt.noteRiga",
    sortable: true
  },
  {
    key: "UM",
    label: "ddt.um",
    sortable: true
  },
  {
    key: "DescrGruppo",
    label: "ddt.descrGruppo",
    sortable: true
  },
  {
    key: "DescrSottogruppo",
    label: "ddt.descrSottogruppo",
    sortable: true
  },
  {
    key: "DescrCategoria",
    label: "ddt.descrCategoria",
    sortable: true
  },
  {
    key: "Colli",
    label: "ddt.colli",
    sortable: true
  },
  {
    key: "Qta",
    label: "ddt.qta",
    sortable: true
  },
  {
    key: "Prezzo",
    label: "ddt.prezzo",
    sortable: true
  },
  {
    key: "ValoreRiga",
    label: "ddt.valoreRiga",
    sortable: true
  },
  {
    key: "ValoreIVA",
    label: "ddt.valoreIVA",
    sortable: true
  },
  {
    key: "AliquotaIVA",
    label: "ddt.aliquotaIVA",
    sortable: true
  },
  {
    key: "Sconto1",
    label: "ddt.sconto1",
    sortable: true
  },
  {
    key: "Sconto2",
    label: "ddt.sconto2",
    sortable: true
  },
  {
    key: "Sconto3",
    label: "ddt.sconto3",
    sortable: true
  },
  {
    key: "ScontoPagamento",
    label: "ddt.scontoPagamento",
    sortable: true
  },
  {
    key: "ScontoTestata",
    label: "ddt.scontoTestata",
    sortable: true
  },
  {
    key: "DescrIVA",
    label: "ddt.descrIVA",
    sortable: true
  },
  {
    key: "PercProv1",
    label: "ddt.percProv1",
    sortable: true
  },
  {
    key: "PercProv2",
    label: "ddt.percProv2",
    sortable: true
  },
  {
    key: "ValoreProv1",
    label: "ddt.valoreProv1",
    sortable: true
  },
  {
    key: "ValoreProv2",
    label: "ddt.valoreProv2",
    sortable: true
  },
  {
    key: "NumDDT",
    label: "ddt.numDDT",
    sortable: true
  },
  {
    key: "SerieDDT",
    label: "ddt.serieDDT",
    sortable: true
  },
  {
    key: "AnnoDDT",
    label: "ddt.annoDDT",
    sortable: true
  },
  {
    key: "NumOrdine",
    label: "ddt.numOrdine",
    sortable: true
  },
  {
    key: "SerieOrdine",
    label: "ddt.serieOrdine",
    sortable: true
  },
  {
    key: "AnnoOrdine",
    label: "ddt.annoOrdine",
    sortable: true
  },
  {
    key: "CodGruppo",
    label: "ddt.codGruppo",
    sortable: true
  },
  {
    key: "CodSottogruppo",
    label: "ddt.codSottogruppo",
    sortable: true
  },
  {
    key: "CodIVA",
    label: "ddt.codIVA",
    sortable: true
  },
  {
    key: "CodCategoria",
    label: "ddt.codCategoria",
    sortable: true
  }
];

export const QUERY_COLUMNS = [
  {
    key: "codanagra",
    label: "registry.codanagra",
    sortable: true
  },
  {
    key: "tipo",
    label: "registry.tipo",
    sortable: true
  },
  {
    key: "descranagra",
    label: "registry.descranagra",
    sortable: true
  },
  {
    key: "piva",
    label: "registry.piva",
    sortable: true
  },
  {
    key: "cf",
    label: "registry.cf",
    sortable: true
  },
  {
    key: "isonazione",
    label: "registry.isonazione",
    sortable: true
  },
  {
    key: "descrnazione",
    label: "registry.descrnazione",
    sortable: true
  },
  {
    key: "cap",
    label: "registry.cap",
    sortable: true
  },
  {
    key: "citta",
    label: "registry.citta",
    sortable: true
  },
  {
    key: "descrprovincia",
    label: "registry.descrprovincia",
    sortable: true
  },
  {
    key: "indirizzo",
    label: "registry.indirizzo",
    sortable: true
  },
  {
    key: "telefono",
    label: "registry.telefono",
    sortable: true
  },
  {
    key: "telefono2",
    label: "registry.telefono2",
    sortable: true
  },
  {
    key: "mail",
    label: "registry.mail",
    sortable: true
  },
  {
    key: "mail2",
    label: "registry.mail2",
    sortable: true
  },
  {
    key: "fatturatoannoincorso",
    label: "registry.fatturatoAnnoInCorso",
    sortable: true
  },
  {
    key: "fatturatoannoprec",
    label: "registry.fatturatoAnnoPrec",
    sortable: true
  }
]

export const ITEM_COLUMNS = [
  { label: 'Order ID', key: 'orderId' },
  { label: 'Item ID', key: 'itemId' },
  { label: 'Product Name', key: 'productName' },
  { label: 'Quantity', key: 'quantity' },
  { label: 'Price', key: 'price' }
];

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
