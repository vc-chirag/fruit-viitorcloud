import { NgClass } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SORT_OPTIONS, TABLE_LEVELS } from '@constants/app.constants';
import { TOASTER_TYPE } from '@constants/app.enums';
import { STORAGE } from '@constants/storage.constant';
import { SvgIconComponent } from '@layouts/svg-icon/svg-icon.component';
import { AddNewTabDialogData } from '@models/common.model';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from '@services/storage.service';
import { ToasterService } from '@services/toaster.service';
import { UtilityService } from '@services/utility.service';
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
  selectedSortByOptions = this.data?.tabData?.selectedSortByOptions;
  selectedSortOptions = this.data?.tabData?.selectedSortOptions;
  newTabName = this.data.tabName;
  tabData = this.data.tabData;
  sortOptions = SORT_OPTIONS;

  constructor(
    private storageService: StorageService,
    private toasterService: ToasterService,
    @Inject(MAT_DIALOG_DATA) public data: AddNewTabDialogData,
    private dialogRef: MatDialogRef<AddNewTabComponent>,
    private utilityService: UtilityService
  ) { }

  saveConfig(tabName: string) {
    if (!tabName.trim()) {
      this.toasterService.displayTranslation('common.tabNameValidation', TOASTER_TYPE.ERROR);
      return;
    }
    if (!this.selectedOptions?.length) {
      this.toasterService.displayTranslation('common.columnsValidation', TOASTER_TYPE.ERROR);
      return;
    }
    const tabConfig = this.storageService.get(STORAGE.TAB_CONFIG);
    const existingTabs = tabConfig ? JSON.parse(tabConfig) : [];
    let uuid;

    if (this.data.isNewTab) {
      uuid = this.utilityService.getRandomStringWithDate();
    } else {
      const tab = existingTabs.find((tab) => tab.uuid === this.data.uuid);
      uuid = tab.uuid;
    }

    const new_tabs_config = {
      tabName,
      columns: this.selectedOptions,
      selectedSortByOptions: this.selectedSortByOptions,
      selectedSortOptions: this.selectedSortOptions,
      table: this.data.table,
      uuid
    };

    if (this.data.isNewTab) {
      const sameTab = existingTabs.find((tab) => tab.tabName === tabName);
      if (sameTab) {
        this.toasterService.displayTranslation('common.sameTabNameValidation', TOASTER_TYPE.ERROR);
        return;
      }
      existingTabs.push(new_tabs_config);
    } else {
      const tabIndex = existingTabs.findIndex((tab) => tab.uuid === this.data.uuid);

      if (tabIndex > -1) {
        existingTabs[tabIndex] = new_tabs_config;
      } else {
        existingTabs.push(new_tabs_config);
      }
    }
    this.storageService.set(STORAGE.TAB_CONFIG, JSON.stringify(existingTabs));

    const dialogData = {
      selectedColumns: this.selectedOptions,
    };
    this.utilityService.setSidebarTabs(existingTabs);
    this.dialogRef.close(JSON.stringify(dialogData));
    const message = this.data.isNewTab ? 'common.tabAddedMsg' : 'common.tabUpdatedMsg';
    this.toasterService.displayTranslation(message);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
