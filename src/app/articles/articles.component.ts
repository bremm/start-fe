import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articleList: Article[];

  constructor(private articleService: HttpClientService<Article>) {
    articleService.setObjectName("Article");
   }

  ngOnInit(): void {
    this.fetchArticle();
  }

  fetchArticle(): void {
    this.articleService.getAll().subscribe( 
      articles => this.articleList = articles );
  }

}
