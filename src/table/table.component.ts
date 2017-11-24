import { TableConfiguration } from './configuration/TableConfiguration';
import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'extended-table',
    templateUrl: './table.html'
})
export class TableComponent implements OnInit{
    @Input()
    data : any[];
    @Input()
    configuration: TableConfiguration;
    constructor(){
        
    }

    public ngOnInit(): void {
        console.log(this.configuration);
        this.data = this.configuration.loadFunction();
    }
}