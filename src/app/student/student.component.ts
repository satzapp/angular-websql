import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StudentService } from "../services/student.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;
  isSubmitted: boolean = false;
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {}
  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]
      ],
      country: ["", Validators.required],
      comments: ["", Validators.required]
    });
  }

  // access to form fields
  get validate() {
    return this.studentForm.controls;
  }

  // form submission
  submitForm() {
    this.isSubmitted = true;
    // stop here if form is invalid
    if (this.studentForm.invalid) {
      console.log("Invalid");
      return;
    }

    this.isLoading = false;
    let isUpdated = true; //this.studentService.save(this.studentForm.value);

    if (isUpdated) {
      console.log("Student data is added!");
    } else {
      console.log("Student data is not added!");
    }
    return;
  }
}
