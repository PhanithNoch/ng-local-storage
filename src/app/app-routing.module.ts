import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EntertainmentDetailComponent } from "./entertainment-detail/entertainment-detail.component";
import { EntertainmentComponent } from "./entertainment/entertainment.component";
import { ErrorComponent } from "./error/error.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { TechnologyComponent } from "./technology/technology.component";
import { ValidationAppComponent } from "./validation-app/validation-app.component";

const routes: Routes = [
  // {
  //   path: "",
  //   children: [{ path: "", component: HomePageComponent }],
  // },
  {path:"",redirectTo:"topic/entertainment",pathMatch:'full'},
  {
    path: "topic",
    children: [
      { path: "entertainment", component: EntertainmentComponent },
      { path: "entertainment-details/:id", component: EntertainmentDetailComponent },
      { path: "technology", component: TechnologyComponent },
      { path: "validation-app", component: ValidationAppComponent },
      { path: "**", component: ErrorComponent },
    ],
  },

  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
