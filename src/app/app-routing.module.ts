import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'main-panel', pathMatch:"full"},
  {path:'main-panel', loadComponent:()=>import('./main-panel/main-panel.component').then((m)=>m.MainPanelComponent)},
  {path:'employees-list', loadComponent:()=>import('./employees/employees-list/employees-list.component').then((m)=>m.EmployeesListComponent)},
  {path:'employee/:id', loadComponent:()=>import('./employees/employee/employee.component').then((m)=>m.EmployeeComponent)},
  {path:'updateEmployee/:id', loadComponent:()=>import('./employees/update-employee/update-employee.component').then((m)=>m.UpdateEmployeeComponent)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
