import { Column } from '../table/configuration/Column';
import { TableConfiguration } from '../table/configuration/TableConfiguration';
import { Component, OnInit } from '@angular/core';
import { IData } from './Data'
import { DataService } from './data.service'

@Component({
    selector: 'my-app',
    templateUrl: './app.html'
})
export class AppComponent implements OnInit{
    
    data : IData[];
    configuration: TableConfiguration;

    constructor(private readonly _dataService: DataService) {
        
    }

    public loadData = () => {
        this._dataService.getData().subscribe(data => this.data = data, error => console.log(error));
    }

    ngOnInit(): void {
        this.configuration = new TableConfiguration();
        this.configuration.columns = [
            new Column('eyeColor', 'Eye Color', typeof('')),
            new Column('name', 'Name', typeof('')),
            new Column('gender', 'Gender', typeof('')),
            new Column('company', 'Company', typeof('')),
        ];
        this.configuration.loadFunction = this.loadData;
    }
}