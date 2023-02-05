import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from '../core/services/app.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {

    public items: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);

    constructor(
        private _appService: AppService
    ) { }

    public getData() {
        this._appService.requestEntity(
            'GET',
            'https://dummyjson.com/products'
        ).subscribe({
            next: (data: any) => {
                this.items.next(data.products);
                console.table(data.products);
            }
        })
    }
}
