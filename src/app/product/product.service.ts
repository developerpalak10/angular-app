import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL = "https://dummyjson.com/users";
  constructor(private httpclient:HttpClient) { }
  httpOption = new HttpHeaders({
    'Content-Type':'application/json'
  })
  getAll():Observable<any>{
    return this.httpclient.get(this.apiURL).pipe(catchError(this.errorHandler))
  }

  getFind(id:string):Observable<any>{
    return this.httpclient.get(this.apiURL+"/"+id).pipe(catchError(this.errorHandler))
  }
  findProduct(id:number):Observable<any>{
    return this.httpclient.get(this.apiURL+"/"+id).pipe(catchError(this.errorHandler))
  }
  searchProduct(name:string):Observable<any>{
    return this.httpclient.get(`https://dummyjson.com/users/search?q=${name}`).pipe(catchError(this.errorHandler))
  }
  deleteProduct(id:number):Observable<any>{
    return this.httpclient.delete(this.apiURL + '/' + id, {headers:this.httpOption})
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  saveProduct(product:Product):Observable<any>{
    return this.httpclient.post(`${this.apiURL}/add`,JSON.stringify(product),{headers:this.httpOption})
    .pipe(
      catchError(this.errorHandler)
    )
  }
  updateProduct(id:number,product:Product):Observable<any>{
    return this.httpclient.put(`${this.apiURL}/${id}`,JSON.stringify(product),{headers:this.httpOption})
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any){
    let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
  }
}
