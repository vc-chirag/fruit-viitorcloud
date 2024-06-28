import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, ViewChild, input, output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { APP, ITEM_COLUMNS, ITEM_DATA_SOURCE, ORDER_COLUMNS, TABLE_LEVELS } from '@constants/app.constants';
import { SvgIconComponent } from '@layouts/svg-icon/svg-icon.component';
import { ItemElement, OrderElement } from '@models/dashboard.model';
import { TranslateModule } from '@ngx-translate/core';
import { VcButtonComponent } from '@vc-libs/vc-button/vc-button.component';
import { VcInputComponent } from '@vc-libs/vc-input/vc-input.component';

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
export class InnerTableComponent implements AfterViewInit {

  @ViewChild('innerTableSort') innerSort: MatSort;
  @ViewChild('nestedTableSort') nestedSort: MatSort;
  @ViewChild('innerPaginator') innerPaginator: MatPaginator;
  @ViewChild('nestedPaginator') nestedPaginator: MatPaginator;
  selectedInnerColumns = input.required<string[]>();
  nestedSelectedInnerColumns = input<string[]>();
  openDialog = output<number>();

  orderDataSource = new MatTableDataSource<OrderElement>();

  @Input() set innerDataSource(datSource: MatTableDataSource<OrderElement>) {
    this.orderDataSource = datSource;
  };
  nestedDataSource = new MatTableDataSource(ITEM_DATA_SOURCE);
  nestedExpandedElement: ItemElement | null = null;

  readonly availableColumns = ORDER_COLUMNS;
  readonly tableLevels = TABLE_LEVELS;
  readonly pageSizeOptions = APP.PAGE_OPTIONS;

  ngAfterViewInit() {
    this.setPagination();
    this.setSorting();
  }

  setPagination() {
    this.orderDataSource.paginator = this.innerPaginator;
  }

  setFilteredData(ele: OrderElement) {
    if (ele?.orderId) {
      const filteredData = ITEM_DATA_SOURCE.filter(res => res.orderId === ele?.orderId);
      this.nestedDataSource = new MatTableDataSource(filteredData);
      this.nestedDataSource.paginator = this.nestedPaginator;
      this.nestedDataSource.sort = this.nestedSort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.orderDataSource.filter = filterValue.trim().toLowerCase();
  }

  applyNestedFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.nestedDataSource.filter = filterValue.trim().toLowerCase();
  }

  setSorting() {
    this.orderDataSource.sort = this.innerSort;
  }

  getOrderColumnDisplayName(columnProperty: string): string {
    const column = ORDER_COLUMNS.find(col => col.key === columnProperty);
    return column ? column.label : columnProperty;
  }

  getItemColumnDisplayName(columnProperty: string): string {
    const column = ITEM_COLUMNS.find(col => col.key === columnProperty);
    return column ? column.label : columnProperty;
  }



  openDialogModal(tableLevel: number) {
    this.openDialog.emit(tableLevel);
  }
}
