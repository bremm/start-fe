import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../http-client.service';
import { Price } from '../price';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articleList: Article[];

  constructor(private articleService: ArticleService) {
   }

  getMaxId(): number {
    return Math.max(... this.articleList.map(o => o.id));
  }

  ngOnInit(): void {
    this.fetchArticle();
  }

  fetchArticle(): void {
    this.articleService.getAll().subscribe( 
      articles => this.articleList = articles );
  }

  createArticle(): void {
    this.articleService.post({purchasePrice: {} } as Article).subscribe(
      newArticle => this.articleList.push(newArticle)
    );
  }

  delete(id: number): void {
    this.articleService.delete(id).subscribe(
      _ => this.articleList = this.articleList.filter( a => a.id != id)
    );
  }

}
