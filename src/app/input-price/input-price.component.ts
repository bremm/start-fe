import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Price, Currency } from '../price';


@Component({
  selector: 'app-input-price',
  templateUrl: './input-price.component.html',
  styleUrls: ['./input-price.component.scss']
})
export class InputPriceComponent implements OnInit {
  @Input() inputModel: Price;
  @Output() inputModelChange = new EventEmitter<Price>();
  _currencyType = Object.values(Currency);

  constructor() { }

  ngOnInit(): void {
  }

  valueChanged(event){
    console.log(event.target.value);

  }

}
