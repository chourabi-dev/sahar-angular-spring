import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }


  getDepartmentsList(){
   return this.http.get(environment.api+'/departments/list')
  }
  getClientsList(){
    return this.http.get(environment.api+'/clients/list')
   }
 

  getProductsList(){
    return this.http.get(environment.api+'/products/list')
   }

  getEmployeesList(){
    return this.http.get(environment.api+'/employees/list')
   }
 

  addDepartment(data){
    return this.http.post(environment.api+'/departments/add',data)
   }


   addEmployee(data){
    return this.http.post(environment.api+'/employees/add',data)
   }

   addProduct(data){
    return this.http.post(environment.api+'/products/add',data)
   }

   findProductById(id){
    
    return this.http.get(environment.api+'/products/find-by-id/'+id)
   }


   updateProduct(data,id){
    return this.http.post(environment.api+'/products/update/'+id,data)
   }

   deleteProduct(id){
    return this.http.delete(environment.api+'/products/delete/'+id)
   }


   placeOrders(data){
    
    return this.http.post(environment.api+'/sells/add-many',data)
   }
}
