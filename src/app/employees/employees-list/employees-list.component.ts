import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { AlldataService } from 'src/app/alldata.service';
import { RouterLink } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule, MaterialModule,RouterLink,EmployeeComponent],
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {

  AllEmployeeData:any[] = [];
  employeeDetails:any
  employeeReport:boolean = false;

  @ViewChild("details") detailsContainer!:ElementRef

  constructor(private _AlldataService:AlldataService){}

  ShowEmployeeDetails(){
    this.employeeReport = true;
  }

  onSelected(id: string) {
    // this.detailsContainer.nativeElement.innerHtml = ''
    const employee = this.AllEmployeeData.find(employee => employee.id === id);
  
    if (employee) {
      this.employeeDetails = employee;
      // console.log(this.employeeDetails.id);
      return this.employeeDetails;
    } else {
      // console.log(`Employee with ID ${id} not found.`);
      return null;
    }
  }
  


  ngOnInit(): void {
    this.allEmployees();
  }
 


  allEmployees(){
    this._AlldataService.getData().subscribe(
      (formDataArr) =>{ 
      // console.log(formDataArr);
      this.AllEmployeeData = formDataArr;
  })
}


}
