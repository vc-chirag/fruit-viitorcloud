import { Component, ElementRef, OnInit } from '@angular/core';
import { PIVOT_TABLE } from '@constants/mock.constants';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';
import 'pivottable';
import 'pivottable/dist/c3_renderers';
import 'pivottable/dist/export_renderers';

@Component({
  selector: 'app-pivot-table',
  standalone: true,
  templateUrl: './pivot-table.component.html',
  styleUrl: './pivot-table.component.scss'
})
export class PivotTableComponent implements OnInit {
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.initializePivotTable();
  }

  initializePivotTable() {
    const data = PIVOT_TABLE;
    const derivers = $.pivotUtilities.derivers;
    const renderers = $.extend(
      $.pivotUtilities.renderers,
      $.pivotUtilities.export_renderers,
      $.pivotUtilities.c3_renderers
    );
    const derivedAttributes = {
      "Age Bin": derivers.bin("Age", 10),
      "Gender Imbalance": (mp) => mp["Gender"] === "Male" ? 1 : -1
    };
    $(this.el.nativeElement).find('#output').pivotUI(
      data,
      {
        renderers: renderers,
        derivedAttributes: derivedAttributes,
        cols: ["Age Bin"],
        rows: ["Gender"],
        aggregatorName: 'Count',
        rendererName: 'Table'
      }
    );
  }
}
