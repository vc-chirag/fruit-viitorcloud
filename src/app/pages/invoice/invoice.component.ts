import { Component, DestroyRef, inject, signal, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { finalize } from 'rxjs';

import { INVOICE_COL } from '@constants/app.constants';
import { TableColumn } from '@models/common.model';
import { SupabaseService } from '@services/supabase.service';
import { VcTableComponent } from '@vc-libs/vc-table/vc-table.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [TranslateModule, VcTableComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
  @ViewChild(VcTableComponent) private vcTable: VcTableComponent;
  #destroyRef = inject(DestroyRef);

  invoiceList = new MatTableDataSource<any>();
  totalInvoices = signal(0);
  columns = signal<TableColumn[]>(INVOICE_COL);
  isLoading = signal(false);

  constructor(
    private supabaseService: SupabaseService
  ) { }

  ngOnInit(): void {
    this.getInvoice();
  }

  getInvoice(): void {
    this.isLoading.set(true);
    this.invoiceList = new MatTableDataSource([]);
    this.supabaseService.get('invoice_out')
      .pipe(
        takeUntilDestroyed(this.#destroyRef),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe((res) => {
        this.invoiceList = new MatTableDataSource(res.data);
        this.totalInvoices.set(res.data.length);
        this.vcTable.updateTotalRecords(this.totalInvoices());
      });
  }
}
