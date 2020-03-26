import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../http-client.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article: Article;

  constructor(
    private articleService: ArticleService,
    private routing: ActivatedRoute,
    private location: Location) { 
  }

  ngOnInit(): void {
    this.fetchArticle();
  }

  fetchArticle(): void {
    const id = +this.routing.snapshot.paramMap.get('id');
    this.articleService.get(id).subscribe(
      article => this.article = article
    );
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.articleService.put(this.article).subscribe(
      c => this.article = c
    );
  }
}
