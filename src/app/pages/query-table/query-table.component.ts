import { Component, DestroyRef, inject, input, signal, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { QUERY_COLUMNS } from '@constants/app.constants';
import { STORAGE } from '@constants/storage.constant';
import { SvgIconComponent } from '@layouts/svg-icon/svg-icon.component';
import { TableColumn } from '@models/common.model';
import { AddNewTabComponent } from '@pages/add-new-tab/add-new-tab.component';
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
  uuid = input<string>();
  tabName = '';

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
    const query_col = this.getSavedTabColumns();
    query_col.length && this.columns.set(query_col);
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

  getSavedTabColumns() {
    const tabConfig = this.storageService.get(STORAGE.TAB_CONFIG);
    if (tabConfig) {
      const unfilteredTabs = JSON.parse(tabConfig);
      const currentTab = unfilteredTabs.find((tab) => tab.uuid === this.uuid());
      this.tabName = currentTab.tabName;
      return QUERY_COLUMNS.filter((col) => currentTab.columns.includes(col.key));
    } else {
      return null;
    }
  }

  openDialog() {
    const selectedColumns = this.getSavedTabColumns();
    const dialogRef = this.dialog.open(AddNewTabComponent, {
      data: {
        availableColumns: QUERY_COLUMNS,
        selectedColumns: selectedColumns && structuredClone(selectedColumns).map(col => col.key),
        storageKey: STORAGE.TAB_CONFIG,
        tabName: this.tabName,
        uuid: this.uuid(),
        table: 'registry'
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
}
