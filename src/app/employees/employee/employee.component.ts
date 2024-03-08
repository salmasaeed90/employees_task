import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlldataService } from '../../alldata.service';
import { MaterialModule } from '../../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

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
  showDetails:any = {}

  constructor(private _ActivatedRoute:ActivatedRoute,
    private _AlldataService:AlldataService,
    private _AngularFirestore:AngularFirestore ){}


  ngOnInit(): void {
    
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.employeeId = params.get('id');
        //console.log(this.employeeId);
        
      }
    })

    this.showEmployeeDetails()
  }

  showEmployeeDetails() {
    
    
    this._AngularFirestore.doc(`employees/${this.employeeId}`).valueChanges()
    .subscribe({
      next:(res) =>{
        //console.log(res);
        this.showDetails = res;
        //console.log( this.showDetails.fNameinE);
      },
      error: (err) =>{
        console.log(err);
        
      }
    })
    return this.showDetails
    }

}
