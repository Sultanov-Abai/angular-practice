import { Component, OnInit, AfterContentInit, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee';

@Component({
  selector: 'practice-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.scss'
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  contructor() {}

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = "John Doe";
  }
}