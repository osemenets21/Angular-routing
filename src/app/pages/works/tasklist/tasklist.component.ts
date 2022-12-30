import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  @ViewChild(TableComponent) childTable!: TableComponent;

  public user = 'Ivan Ivanov';
  public count = 0;
  public taskName!: string;
  public save = false;
  public pushName!: string;
  public getTask!: string;
  public index!: number;

  addName(): void {
    this.taskName = this.pushName;
    this.pushName = '';
  }
  getName(index: number): void {
    this.save = true;
    this.getTask = this.childTable.taskList[index].name;
    this.index = index;
  }
  getlength(length: number) {
    setTimeout(() => {
      this.count = length;
    });
  }
  reName(): void {
    this.childTable.taskList[this.index].name = this.getTask;
    this.getTask = '';
    this.save = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
