import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from './../address';


@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.scss']
})
export class InputAddressComponent implements OnInit {
  @Input() inputModel: Address;
  @Output() inputModelChange = new EventEmitter<Address>();
  constructor() { }

  ngOnInit(): void {
  }

}
