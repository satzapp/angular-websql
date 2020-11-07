import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      country: ["", Validators.required],
      comments: ["", Validators.required]
    });
  }

  // access to form fields
  get validate() {
    return this.studentForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    // stop here if form is invalid
    if (this.studentForm.invalid) {
      console.log("Invalid");
      return;
    }

    console.log(this.studentForm.value);
  }
}
