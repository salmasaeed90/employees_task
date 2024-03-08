import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {


  constructor(private _HttpClient:HttpClient) { }

  postToDB(formdata:any){
      return this._HttpClient.post
      (`https://employees-adbc0-default-rtdb.firebaseio.com/employees.json`,formdata).subscribe(res =>{
        console.log(res);
        
      })
    }
  

  getData(){
    return this._HttpClient.get
    // <[key:string,data:string]>
    (`https://employees-adbc0-default-rtdb.firebaseio.com/employees.json`)
    .pipe(
      map((response)=> {
        console.log(response);
        
        const obj = Object.entries(response || {})
        let formDataArr = []
        for(let [key,value] of obj){

          formDataArr.push({value, id:key})
        }
        console.log(formDataArr);
        
        return formDataArr
      }),
      catchError(error => {
        console.error('Error fetching data:', error);
        return of([]); // Return an empty array or appropriate fallback
      })
    )
   
  }

  deleteEmployeeData(id:string){
    return this._HttpClient.delete((`https://panelbroject-default-rtdb.firebaseio.com/panelData.json/${id}`))
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
