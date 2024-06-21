import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DEFAULT_COLS, TABLE_LEVELS } from '@constants/app.constants';
import { STORAGE } from '@constants/storage.constant';
import { SvgIconComponent } from '@layouts/svg-icon/svg-icon.component';
import { ColumnConfigDialogData } from '@models/common.model';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from '@services/storage.service';
import { ToasterService } from '@services/toaster.service';
import { VcButtonComponent } from '@vc-libs/vc-button/vc-button.component';

const modules = [MatCheckboxModule, TranslateModule, NgSelectModule, FormsModule];
const components = [VcButtonComponent, SvgIconComponent];
@Component({
  selector: 'app-column-config',
  standalone: true,
  imports: [...modules, ...components],
  templateUrl: './column-config.component.html',
})
export class ColumnConfigComponent {
  readonly tableLevels = TABLE_LEVELS;
  selectedOptions: string[] = this.data.selectedColumns;

  constructor(
    private storageService: StorageService,
    private toasterService: ToasterService,
    @Inject(MAT_DIALOG_DATA) public data: ColumnConfigDialogData,
    private dialogRef: MatDialogRef<ColumnConfigComponent>
  ) { }

  saveConfig(level: number) {
    const storageKey = this.getStorageKey(level);
    this.storageService.set(storageKey, this.selectedOptions);

    const dialogData = {
      selectedColumns: this.selectedOptions,
      tableLevel: level
    };
    this.dialogRef.close(JSON.stringify(dialogData));
    this.toasterService.display('Configuration saved successfully');
  }

  clearConfig(level: number) {
    const storageKey = this.getStorageKey(level);
    this.storageService.set(storageKey, DEFAULT_COLS);
    this.data.selectedColumns = DEFAULT_COLS;

    const dialogData = {
      selectedColumns: this.data.selectedColumns,
      tableLevel: level
    };
    this.dialogRef.close(JSON.stringify(dialogData));
    this.toasterService.display('Configuration cleared successfully');
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getStorageKey(level: number) {
    switch (level) {
      case this.tableLevels.ONE:
        return STORAGE.SELECTED_COLS;
      case this.tableLevels.TWO:
        return STORAGE.INNER_COLS;
      case this.tableLevels.THREE:
        return STORAGE.NESTED_INNER_COLS;
    }
  }

}
