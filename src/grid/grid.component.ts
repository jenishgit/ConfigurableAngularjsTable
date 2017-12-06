import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    Input,
    OnInit,
    QueryList,
    TemplateRef,
    ViewChildren,
} from '@angular/core';
import { ColumnComponent } from './configuration/column.component';

@Component({
    selector: 'ng-grid',
    templateUrl: './grid.html'
})
export class GridComponent implements OnInit, AfterContentInit{
    
    @ContentChildren(ColumnComponent) cols: QueryList<ColumnComponent>;
    @ContentChildren(TemplateRef) templates: QueryList<ColumnComponent>;
    @Input()
    public data : any[];
    public columns: ColumnComponent[];

    constructor(){
        
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
        
    }
    ngAfterContentInit(): void {
        this.columns = this.cols.toArray();
    }
}