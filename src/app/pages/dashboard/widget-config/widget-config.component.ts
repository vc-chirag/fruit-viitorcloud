import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { SvgIconComponent } from '@layouts/svg-icon/svg-icon.component';
import { DashboardCounts } from '@models/dashboard.model';
import { NgSelectModule } from '@ng-select/ng-select';
import { VcButtonComponent } from '@vc-libs/vc-button/vc-button.component';

@Component({
  selector: 'app-widget-config',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, VcButtonComponent, NgSelectModule, SvgIconComponent],
  templateUrl: './widget-config.component.html'
})
export class WidgetConfigComponent {
  dashboardDetails: DashboardCounts[] = [];
  filterData: DashboardCounts[] = [];
  selectedCounts: string[];

  readonly dialogRef = inject(MatDialogRef<WidgetConfigComponent>);
  readonly data = inject<{
    filterData: DashboardCounts[],
    dashboardDetails: DashboardCounts[];
    selectedCounts: string[];
  }>(MAT_DIALOG_DATA);

  ngOnInit(): void {
    this.dashboardDetails = this.data.dashboardDetails;
    this.selectedCounts = this.data.selectedCounts;
  }

  onSelectionChange(event: MatSelectChange): void {
    this.filterData = this.dashboardDetails.filter((res) => event.value.includes(res.key));
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  saveConfig(): void {
    this.dialogRef.close(`${JSON.stringify(this.selectedCounts)}`);
  }

}
