// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { ArticleDetailsComponent } from './article-details.component';
// import { HttpClientService } from '../http-client.service';
// import { httpCustomerStub } from '../http-mock'
// import { of } from 'rxjs';
// import { MockArticleList } from '../mock-articles';
// import { ActivatedRoute } from '@angular/router';
// import { ActivatedRouteStub } from '../test/activated-route-stub';

// describe('ArticleDetailsComponent', () => {
//   let component: ArticleDetailsComponent;
//   let fixture: ComponentFixture<ArticleDetailsComponent>;
//   let httpSpyGet: any;
//   let activatedRoute: ActivatedRouteStub;

//   beforeEach(async(() => {
//     const httpSpy = jasmine.createSpyObj('HttpClientService', ['get', 'setObjectName']);

//     httpSpyGet = httpSpy.get.and.returnValue( of(MockArticleList[0]) );

//     TestBed.configureTestingModule({
//       declarations: [ ArticleDetailsComponent ],
//       providers:    [ 
//         { provide: HttpClientService, useValue: httpSpy },
//         { provide: ActivatedRoute, useValue: ActivatedRouteStub },
//        ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ArticleDetailsComponent);
//     activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as unknown as ActivatedRouteStub;
//     activatedRoute.setParamMap({id: 0});
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
