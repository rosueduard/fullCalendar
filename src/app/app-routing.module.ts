import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}
//   {
//   path: 'organizations',
//   loadChildren: () => import(`src/app/organizations/organizations.module`).then(m => m.OrganizationsModule),
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
