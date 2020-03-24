import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect, tick, fakeAsync } from '@angular/core/testing';

import { InputPriceComponent } from './input-price.component';
import {Price } from './../price' 

describe('InputPriceComponent', () => {
  let component: InputPriceComponent;
  let fixture: ComponentFixture<InputPriceComponent>;
  let priceInput: any;
  let currencySelect: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPriceComponent ],
      providers: [
        { 
          provide: ComponentFixtureAutoDetect, 
          useValue: true,
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPriceComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default amount' ,() => {
    component.inputModel = { 
      amount: 10, 
      currency: "USD" 
    };
    fixture.detectChanges();
    priceInput = fixture.nativeElement.querySelector('input');
    //priceInput.dispatchEvent(new Event('input'));   // <-- does nothing
    expect(priceInput.value).toEqual(''); 
  });

  it('should render default currency' ,() => {
    component.inputModel = { 
      amount: 10, 
      currency: "USD" 
    };
    fixture.detectChanges();
    currencySelect = fixture.nativeElement.querySelector('select');
    //currencySelect.dispatchEvent(new Event('input'));   // <-- does nothing
    fixture.detectChanges();
    expect(currencySelect.value).toEqual('EUR');    
  });

  // it('should render changed price' ,() => {
  //   component.inputModel = { 
  //     amount: 10, 
  //     currency: "USD" 
  //   };
  //   priceInput.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
    
  //   expect(priceInput.value).toContain('10');
  //   expect(currencySelector.value).toContain('USD'); 
  // });
});
