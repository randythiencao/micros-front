import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { InitTestComponent } from './components/init-test/init-test.component';

const routes: Routes = [
  //{
    //   path: '',
    //   component: AppComponent,
    //   canActivate: [AuthGuard],
    //    children: [
    //      {
    //        path: '',
    //        component: MainComponent,
    //         children: [
    //           {
    //             path: '',
    //             component: ChooseComponent
    //           }
    //         ]
    //      }
  //},
  {
    path: '',
    component: InitTestComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
