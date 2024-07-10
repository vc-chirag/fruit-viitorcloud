import { Component, DestroyRef, inject, signal, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';

import { REGISTRY_COL } from '@constants/app.constants';
import { TableColumn } from '@models/common.model';
import { SupabaseService } from '@services/supabase.service';
import { VcTableComponent } from '@vc-libs/vc-table/vc-table.component';

@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [VcTableComponent],
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.scss'
})
export class RegistryComponent {
  @ViewChild(VcTableComponent) private vcTable: VcTableComponent;
  #destroyRef = inject(DestroyRef);

  registryList = new MatTableDataSource<any>();
  totalRegistries = signal(0);
  columns = signal<TableColumn[]>(REGISTRY_COL);
  isLoading = signal(false);

  constructor(
    private supabaseService: SupabaseService
  ) { }

  ngOnInit(): void {
    this.getRegistry();
  }

  getRegistry(): void {
    this.isLoading.set(true);
    this.registryList = new MatTableDataSource([]);
    this.supabaseService.get('anagrafica')
      .pipe(
        takeUntilDestroyed(this.#destroyRef),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe((res) => {
        this.registryList = new MatTableDataSource(res.data);
        this.totalRegistries.set(res.data.length);
        this.vcTable.updateTotalRecords(this.totalRegistries());
      });
  }
}
