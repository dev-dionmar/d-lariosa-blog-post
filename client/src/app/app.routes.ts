import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PostComponent } from './pages/post/post.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'about', component: AboutComponent },
];
