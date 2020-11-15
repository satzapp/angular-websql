import { Injectable } from "@angular/core";

@Injectable()
export class StudentService {
  DB: any;
  constructor() {
    this.createDB();
  }

  // Create database
  async createDB() {
    console.log("Create DB!");
    this.DB = await (<any>window).openDatabase(
      "student",
      "1.0",
      "Temp student information",
      2 * 1024 * 1024
    );

    var createSQL =
      "CREATE TABLE IF NOT EXISTS students ( id integer primary key autoincrement,name VARCHAR(255), email VARCHAR(255), country VARCHAR(50), comments TEXT, created_at TIMESTAMP DEFAULT(datetime('now', 'localtime'))";

    return await this.executeQuery(createSQL);
  }

  // excute the SQL Query
  async executeQuery(sql) {
    await this.DB.transaction(function(tx) {
      tx.executeSql(sql);
    });
  }

  async saveData(data) {
    let saveData = await this.DB.transaction(function(tx) {
      console.log("data", data);
      console.log("tx", tx);
      tx.executeSql(
        "INSERT INTO students (name, email, country, comments) VALUES(?, ?, ?, ?)",
        [data.name, data.email, data.country, data.comments]
      );
    });
    return saveData;
  }

  async getStudents() {
    var data: any = [];
    let ifDataExists: any = await this.executeQuery(
      "SELECT * FROM students order by id DESC"
    );
    if (ifDataExists) {
      data = ifDataExists;
    }
    return data;
  }
}
