import { Component, DestroyRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatTableDataSource } from '@angular/material/table';
import { ORDER_COL } from '@constants/app.constants';
import { TableColumn } from '@models/common.model';
import { SupabaseService } from '@services/supabase.service';
import { VcTableComponent } from '@vc-libs/vc-table/vc-table.component';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [VcTableComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {
  @ViewChild(VcTableComponent) private vcTable: VcTableComponent;
  #destroyRef = inject(DestroyRef);

  orderList = new MatTableDataSource<any>();
  totalOrders = signal(0);
  columns = signal<TableColumn[]>(ORDER_COL);
  isLoading = signal(false);

  constructor(
    private supabaseService: SupabaseService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.isLoading.set(true);
    this.orderList = new MatTableDataSource([]);
    this.supabaseService.get('order_out')
      .pipe(
        takeUntilDestroyed(this.#destroyRef),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe((res) => {
        this.orderList = new MatTableDataSource(res.data);
        this.totalOrders.set(res.data.length);
        this.vcTable.updateTotalRecords(this.totalOrders());
      });
  }
}
