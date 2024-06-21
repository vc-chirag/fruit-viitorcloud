import { FormControl } from '@angular/forms';

export interface ActionToolbar {
  label: string;
  callback: (rowReference: unknown) => void;
}

export interface SvgIcon {
  name: string;
  path: string;
}

export interface DialogData {
  name?: string;
  type: string;
  id?: string;
}

export interface ColumnConfigDialogData {
  availableColumns: TableColumn[];
  selectedColumns: string[];
  tableLevel: number;
}

export interface Entity {
  _id: string;
  name: string;
  created_at: string;
  action: ActionToolbar[];
}

export interface EntityList<T> {
  list: T[] | null;
  total: number;
}

export interface EntityParams {
  sort: string;
  page: number;
  pageSize: number;
  search: string | KeyValue;
  categoryName?: string;
  subCategoryId?: string;
  subCategoryName?: string;
}

export type FormControlMap<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
}

export interface Media {
  url: string;
  file?: File;
  extension?: string;
}

export interface KeyValue {
  [k: string]: unknown;
}

export interface OptionDetail {
  label: string;
  value: string;
}

export interface APIResponseModel<T> {
  status: boolean;
  statusCode: number;
  message: string;
  data: T;
  error: [] | null;
}

export type NullableString = string | null;

export interface OptionsDetail {
  label: string;
  value: string;
}

export interface MediaDetail {
  mediaType: string;
  moduleName: string;
  extensionType: string;
  tabName: string;
}

export interface MediaUrl {
  url: string;
  coverUrl: string;
  banner: string;
  thumbnailImage: string;
  avatar: string;
  [key: string]: string;
  _id: string;
}

export interface UploadMediaDetail {
  id: string;
  url: string;
  file: File;
  name: string;
  mimeType: string;
  progress?: number;
  size: number;
}

export interface PresignedPayload {
  moduleName: string;
  extensions: string;
}
