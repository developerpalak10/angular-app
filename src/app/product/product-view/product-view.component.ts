import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Post } from '../../post/post';
import { Product } from '../product';

@Component({
  selector: 'app-product-view',
  imports: [RouterLink],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  id!: string;
  user!:Product
  isLoading = true;
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['pid'];
    return this.productService.getFind(this.id).subscribe((data: any) => {
     
      this.user=data
      this.isLoading = false
    })

  }

}
