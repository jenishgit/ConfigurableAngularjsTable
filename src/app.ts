import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppComponent } from './app/app.component';
import {Component, NgModule, } from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import {DataService} from './app/data.service';
import { GridModule } from './grid/grid.module'
@NgModule({
    imports:      [BrowserModule, HttpModule, GridModule], // import Angular's BrowserModule
    bootstrap:    [AppComponent],  // indicate the bootstrap component
    declarations: [AppComponent],
    providers: [DataService]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule); // bootstrap with our module