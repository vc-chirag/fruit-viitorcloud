import { NgClass } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TABLE_LEVELS } from '@constants/app.constants';
import { STORAGE } from '@constants/storage.constant';
import { SvgIconComponent } from '@layouts/svg-icon/svg-icon.component';
import { AddNewTabDialogData } from '@models/common.model';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from '@services/storage.service';
import { ToasterService } from '@services/toaster.service';
import { VcButtonComponent } from '@vc-libs/vc-button/vc-button.component';
import { VcInputComponent } from '@vc-libs/vc-input/vc-input.component';

const modules = [MatCheckboxModule, TranslateModule, NgSelectModule, FormsModule];
const components = [VcButtonComponent, SvgIconComponent, VcInputComponent];

@Component({
  selector: 'app-add-new-tab',
  standalone: true,
  imports: [NgClass, ...modules, ...components],
  templateUrl: './add-new-tab.component.html',
  styleUrl: './add-new-tab.component.scss'
})
export class AddNewTabComponent {
  readonly tableLevels = TABLE_LEVELS;
  selectedOptions: string[] = this.data.selectedColumns;
  newTabName = this.data.tabName;

  constructor(
    private storageService: StorageService,
    private toasterService: ToasterService,
    @Inject(MAT_DIALOG_DATA) public data: AddNewTabDialogData,
    private dialogRef: MatDialogRef<AddNewTabComponent>
  ) { }

  saveConfig(tabName: string) {
    const tabConfig = this.storageService.get(STORAGE.TAB_CONFIG);
    const existingTabs = tabConfig ? JSON.parse(tabConfig) : [];
    const tabs_config = {
      tabName,
      columns: this.selectedOptions,
      table: this.data.table
    };

    const tabIndex = existingTabs.findIndex((tab) => tab.tabName === tabName);

    if (tabIndex > -1) {
      existingTabs[tabIndex] = tabs_config;
    } else {
      existingTabs.push(tabs_config);
    }
    this.storageService.set(STORAGE.TAB_CONFIG, JSON.stringify(existingTabs));

    const dialogData = {
      selectedColumns: this.selectedOptions,
    };
    this.dialogRef.close(JSON.stringify(dialogData));
    this.toasterService.display('Tab added successfully');
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
