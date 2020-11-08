import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { StudentComponent } from "./student/student.component";
import { StudentService } from "./services/student.service";
import { AlertComponent } from "./alert/alert.component";
import { StudentListComponent } from "./student-list/student-list.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    StudentComponent,
    AlertComponent,
    StudentListComponent
  ],
  bootstrap: [AppComponent],
  providers: [StudentService]
})
export class AppModule {}
