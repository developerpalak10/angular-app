import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view',
  imports: [RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  isLoading:boolean=true
  id!: number;
  post!: Post;
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postid'];
          
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
      this.isLoading=false
    });
  }
}
