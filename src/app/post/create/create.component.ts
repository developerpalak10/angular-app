import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form!: FormGroup;
  constructor(private postService: PostService, private httpClient: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    })
  }
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((data: any) => {
      this.router.navigateByUrl('/post')
    })

  }
 
}
