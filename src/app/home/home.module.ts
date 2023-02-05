import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppService } from '../core/services/app.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: HomeComponent }
];
@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        AppService
    ]
})
export class HomeModule { }
