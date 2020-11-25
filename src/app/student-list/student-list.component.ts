import { Component, OnInit } from "@angular/core";
import { StudentService } from "../services/student.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  students: any = [];
  constructor(private studentService: StudentService) {}

  async ngOnInit() {
    this.students = await this.studentService.getStudents();
  }
}
