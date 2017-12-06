import { Component, forwardRef, Inject, Input } from '@angular/core';
import { GridComponent } from './grid.component';
import { ColumnComponent } from './configuration/column.component';
@Component({
    selector: '[gridBody]',
    templateUrl:'./grid.body.html'
})
export class GridBodyComponent{
    @Input("gridBody") columns: ColumnComponent[];
    
    @Input() data: any[];

    constructor(@Inject(forwardRef(() => GridComponent)) public grid: GridComponent)
    {
        // console.log(grid);
        // debugger;
    }

    ngAfterContentInit(): void {
        // console.log(this.grid)
        // debugger;
    }
}