import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {

  constructor(private _HttpClient:HttpClient) { }


  generalData(generalData:any){
    return this._HttpClient.post
    (`https://panelbroject-default-rtdb.firebaseio.com/panelData.json`
    ,generalData
    ).subscribe((res) =>{console.log(res);
    })
  }

  getData(){
    return this._HttpClient.get<[key:string, value:string]>
    (`https://panelbroject-default-rtdb.firebaseio.com/panelData.json`).pipe(
      map((response)=> {
        const obj = Object.entries(response)
        let formDataArr = []
        for(let [key,value] of obj){

          formDataArr.push({value, id:key})
        }
        return formDataArr
      })
    )
   
  }
  //name:{formData}

  deleteFormData(id:string){
    return this._HttpClient.delete
    (`https://panelbroject-default-rtdb.firebaseio.com/panelData.json`,{})
  }


}
