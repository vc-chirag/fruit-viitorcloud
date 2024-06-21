import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { STORAGE } from '@constants/storage.constant';
import { SvgIconComponent } from '@layouts/svg-icon/svg-icon.component';
import { DashboardCounts } from '@models/dashboard.model';
import { WidgetConfigComponent } from '@pages/dashboard/widget-config/widget-config.component';
import { StorageService } from '@services/storage.service';
import { VcButtonComponent } from '@vc-libs/vc-button/vc-button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [VcButtonComponent, SvgIconComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  filterData: DashboardCounts[] = [];
  selectedCounts: string[] = [];

  constructor(
    private storageService: StorageService
  ) { }

  dashboardDetails: DashboardCounts[] = [
    {
      title: 'Total Dummy1',
      counts: '8',
      key: 'totalDummy1'
    },
    {
      title: 'Total Dummy2',
      counts: '10',
      key: 'totalDummy2'
    },
    {
      title: 'Total Dummy3',
      counts: '10',
      key: 'totalDummy3'
    },
    {
      title: 'Total Dummy4',
      counts: '10',
      key: 'totalDummy4'
    },
    {
      title: 'Total Dummy5',
      counts: '10',
      key: 'totalDummy5'
    }
  ];

  ngOnInit(): void {
    this.getCountsData();
    this.checkFilterData();
  }

  setData(): void {
    this.storageService.set(STORAGE.COUNT_STATE, this.filterData);
  }

  getCountsData(): void {
    const data = this.storageService.get(STORAGE.COUNT_STATE);
    if (data?.length) {
      this.filterData = data;
    } else {
      this.filterData = [this.dashboardDetails[0]];
    }
  }

  checkFilterData(): void {
    if (this.filterData) {
      this.selectedCounts = this.filterData.map((res) => res.key);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WidgetConfigComponent, {
      disableClose: true,
      data: {
        filterData: this.filterData,
        dashboardDetails: this.dashboardDetails,
        selectedCounts: this.selectedCounts,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        let filterResult = JSON.parse(result);
        this.filterData = this.dashboardDetails.filter((res) => filterResult.includes(res.key));
        this.selectedCounts = filterResult;
        this.setData();
        this.getCountsData();
        this.checkFilterData();
      }
    });
  }

}
