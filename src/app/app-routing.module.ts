import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    }
  
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking',
            onSameUrlNavigation: 'reload',
            scrollPositionRestoration: 'enabled'
        }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
