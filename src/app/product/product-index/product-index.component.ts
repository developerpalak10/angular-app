import { Component, NgModule } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { data } from 'jquery';

@Component({
  selector: 'app-product-index',
  imports: [RouterLink,FormsModule],
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.css',
})
export class ProductIndexComponent {
  users:Product[]=[];
  isLoading:boolean=true;
  sortBy:string=''
  order:string=''
  username:string=''

  constructor(private productService:ProductService,private router: Router,private httpClientT:HttpClient){}
  ngOnInit(){
    return this.productService.getAll().subscribe((data:any)=>{
      this.users=data.users
      this.isLoading=false
      console.log(data.users);
      
    })
    
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe((data: any) => {
      console.log('deleted');
      this.users = this.users.filter(p => p.id !== id)

    })
  }
  onSearchResult(){
    this.isLoading = true
    return this.productService.searchProduct(this.username).subscribe((data: any) => {

      this.users = data.users
      this.isLoading = false

    })
    
  }

}
