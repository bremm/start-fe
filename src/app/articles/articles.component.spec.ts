import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesComponent } from './articles.component';
import { MockArticleList } from '../mock-articles';
import { of } from 'rxjs';
import { HttpClientService } from '../http-client.service';
import { Article } from '../article'

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;
  let httpSpyGetAll: any;

  beforeEach(async(() => {

    const httpSpy = jasmine.createSpyObj('HttpClientService', ['getAll', 'setObjectName']);

    httpSpyGetAll = httpSpy.getAll.and.returnValue( of(MockArticleList) );

    TestBed.configureTestingModule({
      declarations: [ ArticlesComponent ],
      providers:    [ {provide: HttpClientService, useValue: httpSpy } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
