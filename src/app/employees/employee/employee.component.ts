import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlldataService } from '../../alldata.service';
import { MaterialModule } from '../../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, MaterialModule, TranslateModule,
    HttpClientModule,RouterLink],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  employeeId!:string | null;

  @Input() showEmployeeDetails!:any
  constructor(private _ActivatedRoute:ActivatedRoute,
    private _AlldataService:AlldataService){}


  ngOnInit(): void {
    
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.employeeId = params.get('id');
      }
    })

    this.displayEmployeeData()
  }

  displayEmployeeData(){
    //this._AlldataService.getEmployeeById(this.employeeId).subscribe(res => console.log(res))
      
      
  
  }

}
