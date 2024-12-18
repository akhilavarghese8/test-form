import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponentComponent } from './components/input-component/input-component.component';
import { DynamicListComponentComponent } from './components/dynamic-list.component/dynamic-list.component.component';



const routes: Routes = [
  { path: 'dynamic-list', component: DynamicListComponentComponent },
  { path: 'input', component: InputComponentComponent },
  { path: '', redirectTo: '/dynamic-list', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
