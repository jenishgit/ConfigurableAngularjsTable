import { Component, OnInit } from '@angular/core';
import { IData } from './Data'
import { DataService } from './data.service'

@Component({
    selector: 'my-app',
    templateUrl: './table.html'
})
export class AppComponent implements OnInit{
    
    data : IData[];
    constructor(private readonly _dataService: DataService) {
        
    }

    ngOnInit(): void {
        this._dataService.getData().subscribe(data => this.data = data, error => console.log(error));
    }
}