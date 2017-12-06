import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { GridComponent } from './grid.component'
import { ColumnComponent } from './configuration/column.component';
import { GridBodyComponent } from './grid.body';

@NgModule({
    imports: [CommonModule],
    declarations: [GridComponent, ColumnComponent,GridBodyComponent],
    exports:[GridComponent, ColumnComponent]
})
export class GridModule{

}