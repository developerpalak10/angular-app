import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { first } from 'rxjs';
import { NgClass } from '@angular/common';
import { data } from 'jquery';

@Component({
  selector: 'app-product-create',
  imports: [RouterLink, ReactiveFormsModule,NgClass],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  form!: FormGroup
  isSubmitted: boolean = false;
  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit(): void {
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
    // console.warn(this.form.controls['email']);

  }

  onSubmit() {
    this.isSubmitted = true
    return this.productService.saveProduct(this.form.value).subscribe((data:any)=>{
      console.log("saved");
      console.log(data);
      
    })
  }
  onResetForm(){
    this.isSubmitted = false
    this.form.reset();
  }
}
