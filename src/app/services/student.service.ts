import { Injectable } from "@angular/core";

@Injectable()
export class StudentService {
  constructor() {}

  save(data) {
    console.log(data);
  }
}
