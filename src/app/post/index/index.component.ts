import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  posts: Post[] = [];
  isLoading: Boolean = true
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    return this.postService.getAll().subscribe((data: Post[]) => {
      this.posts = data
      this.isLoading = false
      console.log(this.isLoading);

    })
  }
  deletePost(id: number) {
    this.postService.delete(id).subscribe((data: any) => {
      console.log('deleted');
      this.posts = this.posts.filter(p => p.id !== id)

    })
  }
}
