import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Item } from '../item';
import { ArticleService } from '../http-client.service';
import { Article } from '../article';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss']
})
export class InputItemComponent implements OnInit {
  @Input() inputModel: Item;
  @Output() inputModelChange = new EventEmitter<Item>();
  constructor(private articleService: ArticleService) { }
  articleList: Article [];

  ngOnInit(): void {
    this.fetchArticle();
  }

  fetchArticle(): void {
    this.articleService.getAll().subscribe(
      aa => this.articleList = aa
    )
  }

  getArticleName(id: number): string {
    if(this.articleList){
      const article = this.articleList.filter(a=>a.id===id)[0];
      return `${article.name}`;
    }
  }

}
