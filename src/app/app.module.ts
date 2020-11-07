import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { StudentComponent } from "./student/student.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, StudentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
