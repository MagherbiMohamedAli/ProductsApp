import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { AjoutComponent } from './ajout/ajout.component';

const routes: Routes = [
  { path: "liste", component: ListeComponent },
  { path: "ajout", component: AjoutComponent },
  { path: "", component: ListeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
