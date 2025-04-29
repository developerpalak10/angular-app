import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../product';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  id!:number
  product!:Product
  form!:FormGroup
  isSubmitted:boolean = false;
  isLoading:boolean=true
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['pid'];
    this.productService.findProduct(this.id).subscribe((data: Product)=>{
      this.product = data;
      console.log(this.product);
      this.isLoading=false
      
    }); 
        
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      university: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),

    })
  }
  onSubmit(){
    this.isSubmitted = true
    return this.productService.updateProduct(this.id,this.form.value).subscribe((data:any)=>{
      console.log('product updated successfully!');
      this.router.navigateByUrl('product/index');
      
    })
  }
}
