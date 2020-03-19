import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss']
})
export class InputItemComponent implements OnInit {
  @Input() inputModel: Item;
  @Output() inputModelChange = new EventEmitter<Item>();
  constructor() { }

  ngOnInit(): void {
  }

}
