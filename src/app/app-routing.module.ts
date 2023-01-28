import { FirstComponent } from './components/first/first.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from "./components/second/second.component";
import { first } from "rxjs";

const routes: Routes = [
  { path: "first", component: FirstComponent },
  { path: "second", component: SecondComponent },
  { path: "**", component: FirstComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
