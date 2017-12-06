import { Component, OnInit } from '@angular/core';
import { IData } from './Data'
import { DataService } from './data.service'

@Component({
    selector: 'my-app',
    templateUrl: './app.html'
})
export class AppComponent implements OnInit{
    
    data : IData[];

    constructor(private readonly _dataService: DataService) {
        
    }

    public loadData = () => {
        this._dataService.getData().subscribe(data => this.data = data, error => console.log(error));
    }

    ngOnInit(): void {
        this.loadData();
    }
}