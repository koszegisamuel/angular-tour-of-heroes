import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from '@app/_components/articles/articles.component';
import { DashboardComponent, PageNotFoundComponent, SendTranslationComponent } from './_components';
import { ArticleDetailComponent } from './_components';

const routes: Routes = [
  { path: 'admin/published-list', component: ArticlesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'send-translation', component: SendTranslationComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: 'dashboard/detail/:id', component: ArticleDetailComponent },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }