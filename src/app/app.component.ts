import { Column } from '../grid/configuration/Column';
import { GridConfiguration } from '../grid/configuration/GridConfiguration';
import { Component, OnInit } from '@angular/core';
import { IData } from './Data'
import { DataService } from './data.service'

@Component({
    selector: 'my-app',
    templateUrl: './app.html'
})
export class AppComponent implements OnInit{
    
    data : IData[];
    configuration: GridConfiguration;

    constructor(private readonly _dataService: DataService) {
        
    }

    public loadData = () => {
        this._dataService.getData().subscribe(data => this.data = data, error => console.log(error));
    }

    ngOnInit(): void {
        this.configuration = new GridConfiguration();
        this.configuration.columns = [
            new Column('eyeColor', 'Eye Color', typeof('')),
            new Column('name', 'Name', typeof('')),
            new Column('gender', 'Gender', typeof('')),
            new Column('company', 'Company', typeof('')),
        ];
        this.configuration.loadFunction = this.loadData;
    }
}