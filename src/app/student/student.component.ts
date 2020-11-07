import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  ngOnInit() {
    console.log("student 1");
  }
  submitForm() {
    console.log("test");
  }
}
