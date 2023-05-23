import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponentComponent } from './card-component/card-component.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'carrito', component: CardComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
