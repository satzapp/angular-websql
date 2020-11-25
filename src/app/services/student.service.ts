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
      "CREATE TABLE IF NOT EXISTS students ( name VARCHAR(255), email VARCHAR(255), country VARCHAR(50), comments TEXT, created_at TIMESTAMP DEFAULT(datetime('now', 'localtime')))";

    return this.executeQuery(createSQL);
  }

  // excute the SQL Query
  async executeQuery(sql) {
    return await this.DB.transaction(function(tx) {
      tx.executeSql(sql);
    });
  }

  async saveData(data) {
    let saveData = await this.DB.transaction(function(tx) {
      console.log("data", data);
      console.log("tx", tx);
      tx.executeSql(
        "INSERT INTO students (name, email, country, comments) VALUES(?, ?, ?, ?)",
        [data.name, data.email, data.country, data.comments],
        function(sqlTransaction, sqlResultSet) {
          console.log("Table has been created.", sqlResultSet);
        },
        function(sqlTransaction, sqlError) {
          /* Error handling */
          console.log("Table has been created.", sqlError);
        }
      );
    });
    return saveData;
  }

  listStudents() {
    return new Promise((resolve, reject) => {
      this.DB.transaction(function(tx) {
        tx.executeSql(
          "SELECT rowid, name, email, comments FROM students order by rowid DESC",
          [],
          function(tx, results) {
            resolve(results.rows);
          }
        );
      }, null);
    });
  }

  async getStudents() {
    console.log(await this.listStudents());
    return await this.listStudents();
  }
}
