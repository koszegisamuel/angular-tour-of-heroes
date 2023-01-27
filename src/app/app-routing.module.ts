import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from '@app/_components/articles/articles.component';
import { DashboardComponent, LoginComponent, MainPageComponent, PageNotFoundComponent, PublishedArticleDetailComponent, SendTranslationComponent } from './_components';
import { ArticleDetailComponent } from './_components';

const routes: Routes = [
  { path: 'admin/published-list', component: ArticlesComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin', component: LoginComponent },
  { path: 'send-translation', component: SendTranslationComponent },
  { path: '', component: MainPageComponent },
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: 'published/detail/:id', component: PublishedArticleDetailComponent },
  { path: 'admin/dashboard/detail/:id', component: ArticleDetailComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }