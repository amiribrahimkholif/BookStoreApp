import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  //{path:'/',redirectTo:'/home',pathMatch:'full',},
  {path:'home',component: HomeComponent},
  {path:'book',component: BookComponent},
  {path:'author',component: AuthorComponent},
  {path:'**',component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
