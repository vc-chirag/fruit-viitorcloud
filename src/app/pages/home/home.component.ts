import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MAT_TABS } from '@constants/app.constants';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { DynamicTableComponent } from '@pages/dynamic-table/dynamic-table.component';
import { PivotTableComponent } from './pivot-table/pivot-table.component';

const components = [PivotTableComponent, DynamicTableComponent, DashboardComponent];
const modules = [MatTabsModule, TranslateModule];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ...components,
    ...modules
  ],
  templateUrl: './home.component.html'
})

export class HomeComponent {
  readonly matTabs = MAT_TABS;
  tabs = ['dashboard', 'table', 'pivotTable'];
}
