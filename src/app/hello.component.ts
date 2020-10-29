import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["hello.component.css"]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  data: any;
  ngOnInit() {
    this.data = 2;
    this.promiseMethod();
    var db = (<any>window).openDatabase(
      "mydb",
      "1.0",
      "my first database",
      2 * 1024 * 1024
    );
    db.transaction(function(tx) {
      var sql =
        "CREATE TABLE vehicles ( id integer primary key autoincrement,vehicle_plate_no VARCHAR(255))";
      tx.executeSql(sql);
      tx.executeSql("INSERT INTO vehicles VALUES (NULL, ?)", ["TEST"]);
    });
  }

  waitForOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve((this.data = 5));
      }, 1000);
    });
  }

  async promiseMethod() {
    var data = await this.waitForOneSecond();
    if (data) {
      let total = 5 + this.data;
      console.log(total);
    }
  }
}
