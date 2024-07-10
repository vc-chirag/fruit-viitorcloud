import { Component, DestroyRef, inject, input, signal, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { QUERY_COLUMNS } from '@constants/app.constants';
import { STORAGE } from '@constants/storage.constant';
import { SvgIconComponent } from '@layouts/svg-icon/svg-icon.component';
import { TableColumn } from '@models/common.model';
import { ColumnConfigComponent } from '@pages/column-config/column-config.component';
import { StorageService } from '@services/storage.service';
import { SupabaseService } from '@services/supabase.service';
import { VcTableComponent } from '@vc-libs/vc-table/vc-table.component';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-query-table',
  standalone: true,
  imports: [VcTableComponent, SvgIconComponent],
  templateUrl: './query-table.component.html',
  styleUrl: './query-table.component.scss'
})
export class QueryTableComponent {
  @ViewChild(VcTableComponent) private vcTable: VcTableComponent;
  #destroyRef = inject(DestroyRef);

  orderList = new MatTableDataSource<any>();
  totalOrders = signal(0);
  columns = signal<TableColumn[]>(QUERY_COLUMNS);
  isLoading = signal(false);
  tab = input<string>();

  constructor(
    private supabaseService: SupabaseService,
    private dialog: MatDialog,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getQueriesData();
    this.setColumns();
  }

  setColumns() {
    const tabConfig = this.storageService.get(STORAGE.TAB_CONFIG);
    if (tabConfig) {
      const unfilteredTabs = JSON.parse(tabConfig);
      const COLS = unfilteredTabs.find((tab) => tab.tabName === this.tab());
      const query_col = QUERY_COLUMNS.filter((col) => COLS.columns.includes(col.key));
      this.columns.set(query_col);
    }
  }

  async getQueriesData() {
    this.isLoading.set(true);
    this.orderList = new MatTableDataSource([]);
    this.supabaseService.getCustomerData()
      .pipe(
        takeUntilDestroyed(this.#destroyRef),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe((data) => {
        this.orderList = new MatTableDataSource(data);
        this.totalOrders.set(data.length);
        this.vcTable.updateTotalRecords(this.totalOrders());
      });
  }

  openDialog() {
    const selectedColumns = this.getSavedColumns();

    const dialogRef = this.dialog.open(ColumnConfigComponent, {
      data: {
        availableColumns: QUERY_COLUMNS,
        selectedColumns: structuredClone(selectedColumns),
        storageKey: STORAGE.QUERY_COL,
        isQuery: true
      },
      disableClose: true,
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const dialogData = JSON.parse(result);
        const query_col = QUERY_COLUMNS.filter((col) => dialogData.selectedColumns.includes(col.key));
        this.columns.set(query_col);
      }
    });
  }

  getSavedColumns() {
    const columns = this.storageService.get(STORAGE.QUERY_COL);
    return columns;
  }
}
