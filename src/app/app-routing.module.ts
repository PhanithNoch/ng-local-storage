import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntertainmentDetailComponent } from './entertainment-detail/entertainment-detail.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ErrorComponent } from './error/error.component';
import { TechnologyComponent } from './technology/technology.component';
import { ValidationAppComponent } from './validation-app/validation-app.component';
import {HomeContentComponent} from './admin/home-content/home-content.component';
import { UserComponent } from './admin/user/user.component';
import { AdminRootComponent } from './admin/admin-root/admin-root.component';

const routes: Routes = [
  // {
  //   path: "",
  //   children: [{ path: "", component: HomePageComponent }],
  // },
  {path: 'admin', children: [
    
      {path: '', component: AdminRootComponent},
      {path: 'home-content', component: HomeContentComponent},
      {path: 'user', component: UserComponent},
    ]
  },
  {path: '', redirectTo: 'topic/entertainment', pathMatch: 'full'},
  {
    path: 'topic',
    children: [
      { path: 'entertainment', component: EntertainmentComponent },
      { path: 'entertainment-details/:id', component: EntertainmentDetailComponent },
      { path: 'technology', component: TechnologyComponent },
      { path: 'validation-app', component: ValidationAppComponent },
      { path: '**', component: ErrorComponent },
    ],
  },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
