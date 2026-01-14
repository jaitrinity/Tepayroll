import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { EmployeeComponent } from './employee/employee.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';


const routes: Routes = [
  {path : '' ,  redirectTo: '/login', pathMatch: 'full'},
  {path : 'login', component :LoginComponent},
  {path : 'layout', component :LayoutComponent,  canActivate: [AuthGuard],
  children: [
    // Prod
    {path: '', redirectTo: 'employee', pathMatch: 'full'},
    { path: 'employee', component: EmployeeComponent },
    { path: '**', component: WorkInProgressComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
