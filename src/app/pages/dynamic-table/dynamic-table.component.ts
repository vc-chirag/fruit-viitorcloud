import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgClass, NgForOf, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { APP, AVAILABLE_COLUMNS, DEFAULT_COLS, OUTER_DATA_SOURCE, TABLE_LEVELS } from '@constants/app.constants';
import { STORAGE } from '@constants/storage.constant';
import { SvgIconComponent } from '@layouts/svg-icon/svg-icon.component';
import { ColumnConfigComponent } from '@pages/column-config/column-config.component';
import { StorageService } from '@services/storage.service';
import { VcButtonComponent } from '@vc-libs/vc-button/vc-button.component';
import { VcInputComponent } from '@vc-libs/vc-input/vc-input.component';
import { InnerTableComponent } from './inner-table/inner-table.component';

export interface DataElement {
  name: string;
  age: number;
  address: string;
  email: string;
}

const modules = [MatTableModule, MatCheckboxModule, MatExpansionModule, MatPaginatorModule, MatSortModule, TranslateModule, FormsModule];
const components = [VcButtonComponent, SvgIconComponent, VcInputComponent, InnerTableComponent];
@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [NgTemplateOutlet, NgClass, NgForOf, ...components, ...modules],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './dynamic-table.component.html',
})
export class DynamicTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectedColumns: string[] = [];
  selectedInnerColumns: string[] = [];
  nestedSelectedInnerColumns: string[] = [];

  outerDataSource = new MatTableDataSource(OUTER_DATA_SOURCE);
  expandedElement: DataElement | null = null;

  readonly availableColumns = AVAILABLE_COLUMNS;
  readonly tableLevels = TABLE_LEVELS;
  readonly pageSizeOptions = APP.PAGE_OPTIONS;

  constructor(
    private storageService: StorageService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.selectedColumns = this.storageService.get(STORAGE.SELECTED_COLS) || DEFAULT_COLS;
    this.selectedInnerColumns = this.storageService.get(STORAGE.INNER_COLS) || DEFAULT_COLS;
    this.nestedSelectedInnerColumns = this.storageService.get(STORAGE.NESTED_INNER_COLS) || DEFAULT_COLS;
  }

  ngAfterViewInit() {
    this.setPagination();
    this.setSorting();
  }

  setSorting() {
    this.outerDataSource.sort = this.sort;
  }

  setPagination() {
    this.outerDataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.outerDataSource.filter = filterValue.trim().toLowerCase();
  }

  getColumnDisplayName(columnProperty: string): string {
    const column = this.availableColumns.find(col => col.key === columnProperty);
    return column ? column.label : columnProperty;
  }

  openDialog(tableLevel: number) {
    const selectedColumns = this.getSelectedColumns(tableLevel);
    const dialogRef = this.dialog.open(ColumnConfigComponent, {
      data: {
        availableColumns: this.availableColumns,
        selectedColumns: structuredClone(selectedColumns),
        tableLevel
      },
      disableClose: true,
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const dialogData = JSON.parse(result);
        if (dialogData?.tableLevel === this.tableLevels.ONE) {
          this.selectedColumns = dialogData.selectedColumns;
        } else if (dialogData.tableLevel === this.tableLevels.TWO) {
          this.selectedInnerColumns = dialogData.selectedColumns;
        } else {
          this.nestedSelectedInnerColumns = dialogData.selectedColumns;
        }
      }
    });
  }

  getSelectedColumns(tableLevel: number): string[] {
    let selectedColumns = [];
    if (tableLevel === this.tableLevels.ONE) {
      selectedColumns = this.selectedColumns;
    } else if (tableLevel === this.tableLevels.TWO) {
      selectedColumns = this.selectedInnerColumns;
    } else {
      selectedColumns = this.nestedSelectedInnerColumns;
    }
    return selectedColumns;
  }
}
