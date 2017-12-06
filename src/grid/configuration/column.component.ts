import { Component,  Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from '../grid.component';

@Component({
    selector:'ng-grid>ng-grid-column',
    template: ''
})
export class ColumnComponent{
    @Input()
    name: string;
    @Input()
    header: string;
    @Input()
    dataItem: any;
    
}