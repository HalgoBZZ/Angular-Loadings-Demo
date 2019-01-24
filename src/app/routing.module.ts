import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxDemosComponent } from './components/ngx-demos/ngx-demos.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/ngxSpinner', pathMatch: 'full'},
    { path: 'ngxSpinner', component: NgxDemosComponent }
];
    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
