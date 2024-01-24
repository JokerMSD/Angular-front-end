import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Login/login.component";
import { HomeComponent } from "./Home/home.component";

const routes: Routes = [
  { path: "inicio", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
