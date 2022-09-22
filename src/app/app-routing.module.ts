import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafesComponent } from './cafes/cafes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'cafes', component: CafesComponent },
    ]

  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
