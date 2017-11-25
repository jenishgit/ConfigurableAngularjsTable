import { GridConfiguration } from './configuration/GridConfiguration';
import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'ng-grid',
    templateUrl: './grid.html'
})
export class GridComponent implements OnInit{
    @Input()
    data : any[];
    @Input()
    configuration: GridConfiguration;
    constructor(){
        
    }

    public ngOnInit(): void {
        console.log(this.configuration);
        this.data = this.configuration.loadFunction();
    }
}