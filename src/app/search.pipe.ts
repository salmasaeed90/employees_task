import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
  
})
export class SearchPipe implements PipeTransform {

  transform(employees:any[], employeeName:string): any[] {
    // if(employees.length === 0 || employeeName === ''){
    //   return employees
    // }else {

      const resuleArr:any[] = []
      for(const employee of employees){
        if(employee.fNameinE.includes(employeeName)){
          resuleArr.push(employee)
        }
      }
      return resuleArr
    // }
}

}
