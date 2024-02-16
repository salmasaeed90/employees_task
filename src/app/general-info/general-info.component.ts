import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormControl, FormGroup, ReactiveFormsModule,  Validators } from '@angular/forms';
import { Observable } from 'rxjs';
// interface DropdownOptions{
//   option1:string,
//   option2:string
// }
@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [CommonModule,MaterialModule,ReactiveFormsModule],
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit{
  signaturImgSrc='';
  employeeImgSrc='';
  //dropdownOptions$!:Observable<DropdownOptions[]>;
  dropdownOptions:string[]=['option1', 'option2'];
  generalForm!:FormGroup;
  constructor(){}
//   @Output('generalInfo') generalInfo = new EventEmitter<any>()

//  ngOnInit(): void {
//   this.generalInfo.emit(this.generalForm.value);    
//   }
 
ngOnInit(): void {
  this.generalForm = new FormGroup({

    staffNo:new FormControl('',[Validators.required, Validators.pattern('^([a-zA-Z]{1})([0-9]{11})$')]) ,
    type:new FormControl('',[Validators.required]) ,
    cardNum:new FormControl('',[Validators.maxLength(20), Validators.minLength(15)]) ,
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
    /////////////////////////////////////////////////////
    peopleOfDetermination:new FormControl('',[Validators.required]),
    research:new FormControl('',[Validators.required]),
    staff:new FormControl('',[Validators.required]),
    /////////////////////////////////////////////////////
    gender:new FormControl('',[Validators.required]),
    dateOfBirth:new FormControl('',[Validators.required]),
    placeOfBirth:new FormControl(''),
    /////////////////////////////////////////////////////
    union:new FormControl(''),
    department:new FormControl('',[Validators.required]),
    devision:new FormControl('',[Validators.required]),
    /////////////////////////////////////////////////////
    shiftTime:new FormControl('',[Validators.required]),
    religion:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.minLength(11),Validators.pattern(/^01[0125][0-9]{8}$/)]),
    /////////////////////////////////////////////////////
    materialStatus:new FormControl('',[Validators.required]),
    jobTitle:new FormControl('',[Validators.required]),
    jobDegree:new FormControl('',[Validators.required]),

    /////////////////////////////////////////////////////
    indentificationType:new FormControl('',[Validators.required]),
    nationalID:new FormControl('',[Validators.required,Validators.maxLength(14)]),
    nationalIDEndDate:new FormControl('',[Validators.required]),
    /////////////////////////////////////////////////////
    nationality:new FormControl('',[Validators.required]),
    attendenceMachineCode:new FormControl(''),
    /////////////////////////////////////////////////////
    //img
    //file
    signatur:new FormControl('',[Validators.required]),
    employee:new FormControl('',[Validators.required]),

    ///////////////////////////////////////////////////////
    personalEmailAddress:new FormControl('',[Validators.required,Validators.email]),
    officialEmailAddress:new FormControl('',[Validators.required,Validators.email]),
    
  
  
  })
}

// handleFileInput(event: any) {
//   if(event.target.files){
//     const objectURL = URL.createObjectURL(event.target.files[0]);
//     this.signaturImgSrc = objectURL;
//     this.employeeImgSrc = objectURL;
//   }
// }
  signaturImgSrcFromFile(event:any):void{
    if(event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.signaturImgSrc = event.target.result
      }
    }
  }


  employeeImgSrcFromFile(event:any):void{
    if(event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.employeeImgSrc = event.target.result
      }
    }
  }


}
