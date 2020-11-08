import { Injectable } from "@angular/core";

@Injectable()
export class StudentService {
  constructor() {}

  saveData(data) {
    console.log(data);
    return true;
  }
}
