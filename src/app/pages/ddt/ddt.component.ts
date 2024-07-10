import { Component, DestroyRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';

import { DDT_OUT_COL } from '@constants/app.constants';
import { TableColumn } from '@models/common.model';
import { SupabaseService } from '@services/supabase.service';
import { VcTableComponent } from '@vc-libs/vc-table/vc-table.component';

@Component({
  selector: 'app-ddt',
  standalone: true,
  imports: [VcTableComponent],
  templateUrl: './ddt.component.html',
  styleUrl: './ddt.component.scss'
})
export class DdtComponent implements OnInit {
  @ViewChild(VcTableComponent) private vcTable: VcTableComponent;
  #destroyRef = inject(DestroyRef);

  ddtList = new MatTableDataSource<any>();
  totalDdt = signal(0);
  columns = signal<TableColumn[]>(DDT_OUT_COL);
  isLoading = signal(false);

  constructor(
    private supabaseService: SupabaseService
  ) { }

  ngOnInit(): void {
    this.getDdt();
  }

  getDdt(): void {
    this.isLoading.set(true);
    this.ddtList = new MatTableDataSource([]);
    this.supabaseService.get('ddt_out')
      .pipe(
        takeUntilDestroyed(this.#destroyRef),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe((res) => {
        this.ddtList = new MatTableDataSource(res.data);
        this.totalDdt.set(res.data.length);
        this.vcTable.updateTotalRecords(this.totalDdt());
      });
  }
}
