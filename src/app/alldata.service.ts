import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {

  dropdown$!:Observable<[opt:string,opt2:string]>;


  constructor(private _HttpClient:HttpClient) { }

postToDB(formdata:any){
    return this._HttpClient.post
    (`https://panelbroject-default-rtdb.firebaseio.com/panelData.json`,formdata).subscribe(res =>{
      console.log(res);
      
    })
  }
  // postGeneralInfoToDB(formdata:any){
  //   return this._HttpClient.post
  //   (`https://panelbroject-default-rtdb.firebaseio.com/panelData.json`
  //   ,formdata
  //   ).subscribe(res =>{
  //     console.log(res);
      
  //   })
  // }
  

  getData(){
    return this._HttpClient.get<[key:string,data:string]>
    (`https://panelbroject-default-rtdb.firebaseio.com/panelData.json`)
    .pipe(
      map((response)=> {
        const obj = Object.entries(response)
        let formDataArr = []
        for(let [key,value] of obj){

          formDataArr.push({value, id:key})
        }
        console.log(formDataArr);
        
        return formDataArr
      })
    )
   
  }



  // getEmployeeById(id:string|null){
  //   return this._HttpClient.get(`https://panelbroject-default-rtdb.firebaseio.com/panelData/${id}`)
  // }
 

 


}
