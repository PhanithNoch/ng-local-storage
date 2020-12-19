import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EntertainmentComponent } from "./entertainment/entertainment.component";
import { ErrorComponent } from "./error/error.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { TechnologyComponent } from "./technology/technology.component";

const routes: Routes = [
  {
    path: "",
    children: [{ path: "", component: HomePageComponent }],
  },
  {
    path: "topic",
    children: [
      { path: "entertainment", component: EntertainmentComponent },
      { path: "technology", component: TechnologyComponent },
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
