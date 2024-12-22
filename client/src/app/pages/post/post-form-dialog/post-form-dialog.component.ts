import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostService } from '../post.service';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Post_i } from '../post.interface';

@Component({
  selector: 'app-post-form-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  templateUrl: './post-form-dialog.component.html',
  styleUrl: './post-form-dialog.component.css',
})
export class PostFormDialogComponent {
  postForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public matDialogData: {
      title: string;
      data: Post_i;
    },

    private fb: FormBuilder,
    private postService: PostService
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: [''],
    });
  }

  ngOnInit() {
    this.patchFormValue();
  }

  patchFormValue() {
    if (this.matDialogData.title === 'update') {
      this.postForm.patchValue(this.matDialogData.data);
    }
  }

  onDelete() {
    this.postService.delete(this.matDialogData.data.id).subscribe((data) => {
      location.reload();
    });
  }

  onSubmit() {
    if (this.matDialogData.title === 'create') {
      this.postService.create(this.postForm.value).subscribe((data) => {
        location.reload();
      });
    } else {
      this.postService
        .update(this.matDialogData.data.id, this.postForm.value)
        .subscribe((data) => {
          location.reload();
        });
    }
  }
}
