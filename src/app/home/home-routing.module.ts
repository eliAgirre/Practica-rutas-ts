import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home.component';

const homeRoutes: Routes = [
  //{ path: 'home', component: HomeComponent }
  {
    path: 'home',
    component: HomeComponent,
    children: [
        {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
        }
    ]
},
];

@NgModule({
  imports: [
      RouterModule.forChild(homeRoutes)
  ]
})
export class HomeRoutingModule { }
