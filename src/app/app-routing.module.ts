import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateUserComponent } from './user-setting/create-user/create-user.component';
import { UserSettingComponent } from './user-setting/user-setting.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users_se',
        component: UserSettingComponent,
      },
      {
        path: 'users_se/create_se',
        component: CreateUserComponent,
      },
      {
        path: 'users_dl',
        component: UserSettingComponent,
      },
      {
        path: 'users_dl/create_dl',
        component: CreateUserComponent,
      },
      {
        path: 'users_dt',
        component: UserSettingComponent,
      },
      {
        path: 'users_dt/create_dt',
        component: CreateUserComponent,
      },
      {
        path: 'users_ld',
        component: UserSettingComponent,
      },
      {
        path: 'users_ld/create_ld',
        component: CreateUserComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
