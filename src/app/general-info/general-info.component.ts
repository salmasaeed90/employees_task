import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormControl, FormGroup, ReactiveFormsModule,  Validators } from '@angular/forms';

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [CommonModule,MaterialModule,ReactiveFormsModule],
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit{
  constructor(){}
  @Output('generalInfo') generalInfo = new EventEmitter<any>()

 ngOnInit(): void {

    this.generalInfo.emit(this.generalForm)
  }

  generalForm:FormGroup = new FormGroup({

    staffNo:new FormControl('',[Validators.required]) ,
    type:new FormControl('',[Validators.required]) ,
    cardNum:new FormControl('') ,
    branch:new FormControl('',[Validators.required]) ,
    //////////////////////////////////////////////
    fNameinA:new FormControl('',[Validators.required]) ,
    mNameinA:new FormControl('',[Validators.required]) ,
    blNameinA:new FormControl('',[Validators.required]) ,
    lNameinA:new FormControl('',[Validators.required]) ,
    //////////////////////////////////////////////
    fNameinE:new FormControl('',[Validators.required]) ,
    mNameinE:new FormControl('',[Validators.required]) ,
    blNameinE:new FormControl('',[Validators.required]) ,
    lNameinE:new FormControl('',[Validators.required]) ,
    //////////////////////////////////////////////
    pod:new FormControl('',[Validators.required]),
    research:new FormControl('',[Validators.required]),
    adminStaff:new FormControl('',[Validators.required]),
    clincalStaff:new FormControl('',[Validators.required])
  })
 


}
