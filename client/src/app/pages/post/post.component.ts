import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostService } from './post.service';
import { Post_i } from './post.interface';
import { MatDialog } from '@angular/material/dialog';
import { PostFormDialogComponent } from './post-form-dialog/post-form-dialog.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  constructor(private post: PostService, private matDialog: MatDialog) {}
  posts: Post_i[] = [];

  ngOnInit() {
    this.post.getAll().subscribe((data) => {
      this.posts = data;
    });
  }

  onOpenDialog(title: string, post?: Post_i) {
    this.matDialog.open(PostFormDialogComponent, {
      data: {
        title: title,
        data: post,
      },
    });
  }
}
