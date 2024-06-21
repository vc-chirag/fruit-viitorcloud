import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild, input, output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { APP, AVAILABLE_COLUMNS, INNER_DATA_SOURCE, NESTED_DATA_SOURCE, TABLE_LEVELS } from '@constants/app.constants';
import { SvgIconComponent } from '@layouts/svg-icon/svg-icon.component';
import { TableColumn } from '@models/common.model';
import { TranslateModule } from '@ngx-translate/core';
import { VcButtonComponent } from '@vc-libs/vc-button/vc-button.component';
import { VcInputComponent } from '@vc-libs/vc-input/vc-input.component';
import { DataElement } from '../dynamic-table.component';

const modules = [MatTableModule, MatCheckboxModule, MatExpansionModule, MatPaginatorModule, MatSortModule, TranslateModule];
const components = [VcButtonComponent, SvgIconComponent, VcInputComponent];

@Component({
  selector: 'app-inner-table',
  standalone: true,
  imports: [...modules, ...components],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './inner-table.component.html',
})
export class InnerTableComponent implements OnInit, AfterViewInit {

  @ViewChild('innerTableSort') innerSort: MatSort;
  @ViewChild('nestedTableSort') nestedSort: MatSort;
  @ViewChild('innerPaginator') innerPaginator: MatPaginator;
  @ViewChild('nestedPaginator') nestedPaginator: MatPaginator;
  selectedInnerColumns = input.required<string[]>();
  nestedSelectedInnerColumns = input<string[]>();
  openDialog = output<number>();
  columns: TableColumn[] = [];

  innerDataSource = new MatTableDataSource(INNER_DATA_SOURCE);
  nestedDataSource = new MatTableDataSource(NESTED_DATA_SOURCE);
  expandedElement: DataElement | null = null;
  nestedExpandedElement: DataElement | null = null;

  readonly availableColumns = AVAILABLE_COLUMNS;
  readonly tableLevels = TABLE_LEVELS;
  readonly pageSizeOptions = APP.PAGE_OPTIONS;

  ngOnInit(): void {
    this.columns = this.availableColumns.filter((col) => this.nestedSelectedInnerColumns().includes(col.key));
  }

  ngAfterViewInit() {
    this.setPagination();
    this.setSorting();
  }

  setPagination() {
    this.innerDataSource.paginator = this.innerPaginator;
    this.nestedDataSource.paginator = this.nestedPaginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.innerDataSource.filter = filterValue.trim().toLowerCase();
  }

  applyNestedFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.nestedDataSource.filter = filterValue.trim().toLowerCase();
  }

  setSorting() {
    this.innerDataSource.sort = this.innerSort;
    this.nestedDataSource.sort = this.nestedSort;
  }

  getColumnDisplayName(columnProperty: string): string {
    const column = this.availableColumns.find(col => col.key === columnProperty);
    return column ? column.label : columnProperty;
  }

  openDialogModal(tableLevel: number) {
    this.openDialog.emit(tableLevel);
  }
}
