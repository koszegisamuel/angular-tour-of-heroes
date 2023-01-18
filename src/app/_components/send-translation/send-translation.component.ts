import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '@app/_models';
import { ArticleService } from '@app/_services';

@Component({
  selector: 'app-send-translation',
  templateUrl: './send-translation.component.html',
  styleUrls: ['./send-translation.component.css']
})
export class SendTranslationComponent implements OnInit {
  articles: Article[] = [];
  articleForm!: FormGroup;
  
  constructor(private articleService: ArticleService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getArticles();
    this.createArticleForm();
  }

  getArticles(): void {
    this.articleService.getAllArticles()
      .subscribe(data => this.articles = data);
  }

  createArticleForm() {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      originalTitle: ['', Validators.required],
      originalDate: ['', Validators.required],
      translator: ['', Validators.required],
      translationDate: ['', Validators.required],
      category: ['', Validators.required],
      translation: ['', Validators.required]
    })
  }

  onSubmit() {
    let obj: Article = {
      title: this.articleForm.value.title,
      author: this.articleForm.value.author,
      originalTitle: this.articleForm.value.originalTitle,
      originalDate: this.articleForm.value.originalDate,
      translator: this.articleForm.value.translator,
      translationDate: this.articleForm.value.translationDate,
      category: this.articleForm.value.category,
      translation: this.articleForm.value.translation,
      isPublished: "nem",
      imagePath: "",
      filePath: "",
      readNum: 0,
    };

    this.articleService.addArticle(obj)
      .subscribe(() => {
        this.getArticles();
      });
    this.articleForm.reset();
  }
}
