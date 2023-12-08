import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get("http://localhost:8080/Products");
  }
  addProduct(prd:any){
    return this.http.post("http://localhost:8080/addProduct", prd);
  }
  deleteProduct(id:number){
    return this.http.delete("http://localhost:8080/deleteProduct/"+id);
  }
  getProductById(id:number){
    return this.http.get("http://localhost:8080/GetProduct/"+id);
  }

}
