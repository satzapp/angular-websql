import { Injectable } from "@angular/core";

@Injectable()
export class StudentService {
  constructor() {}

  saveData(data) {
    return true;
  }

  getStudents() {
    return [
      {
        id: 1,
        name: "Satz",
        email: "satz@example.com",
        country: "IN",
        comments: "Test content for this comment section."
      },
      {
        id: 2,
        name: "Satz K",
        email: "satzk@example.com",
        country: "IN",
        comments: "Test content for this comment section."
      },
      {
        id: 3,
        name: "Satz K M",
        email: "satzkr@example.com",
        country: "IN",
        comments: "Test content for this comment section."
      }
    ];
  }
}
