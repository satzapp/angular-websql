import { Injectable } from "@angular/core";

@Injectable()
export class StudentService {
  DB: any;
  constructor() {
    this.createDB();
  }

  // Create database
  createDB() {
    this.DB = (<any>window).openDatabase(
      "student",
      "1.0",
      "Temp student information",
      2 * 1024 * 1024
    );

    var createSQL =
      "CREATE TABLE IF NOT EXISTS students ( id integer primary key autoincrement,name VARCHAR(255), email VARCHAR(255), country VARCHAR(50), comments TEXT, created_at TIMESTAMP DEFAULT(datetime('now', 'localtime'))";

    return this.executeQuery(createSQL);
  }

  // excute the SQL Query
  executeQuery(sql) {
    return this.DB.transaction(function(tx) {
      tx.executeSql(sql);
    });
  }

  saveData(data) {
    return this.DB.transaction(function(tx) {
      console.log(data)
      tx.executeSql(
        "INSERT INTO authors (name, email, country, comments) VALUES(?, ?, ?, ?)",
        [data.name, data.email, data.country, data.comments]
      );
    });
  }

  getStudents() {
    var data = [];
    let ifDataExists = this.executeQuery(
      "SELECT * FROM students order by id DESC"
    );
    if (ifDataExists) {
      data = ifDataExists;
    }

    return data;
    // return [
    //   {
    //     id: 1,
    //     name: "Satz",
    //     email: "satz@example.com",
    //     country: "IN",
    //     comments: "Test content for this comment section."
    //   },
    //   {
    //     id: 2,
    //     name: "Satz K",
    //     email: "satzk@example.com",
    //     country: "IN",
    //     comments: "Test content for this comment section."
    //   },
    //   {
    //     id: 3,
    //     name: "Satz K M",
    //     email: "satzkr@example.com",
    //     country: "IN",
    //     comments: "Test content for this comment section."
    //   }
    // ];
  }
}
