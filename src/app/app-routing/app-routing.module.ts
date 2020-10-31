import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HelloComponent } from "../hello.component";
import { StudentComponent } from "../student/student.component";

const routes: Routes = [
  { path: "hello", component: HelloComponent },
  { path: "student", component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
