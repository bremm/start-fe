import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-validator',
  templateUrl: './input-validator.component.html',
  styleUrls: ['./input-validator.component.scss']
})
export class InputValidatorComponent implements OnInit {
  @Input() inputModel: any;
  @Input() invalidStyle?: string = "border: solid 3px rgba(255,0,0,0.8)";
  @Input() neutralStyle?: string = "border: solid 1px light-grey";
  @Input() validStyle?: string = "border: solid 3px rgba(0,0,255,0.5)";
  @Input() pattern?: string | RegExp;
  @Input() validator?: (val: any) => boolean;

  @Output() inputModelChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  getStyle(): string {
    return this.isValid()? this.neutralStyle: this.invalidStyle;
  }


  isValid(): boolean {
    if(this.validator)
      return this.validator(this.inputModel);
    return true;
  }

  validate(): void {

  }

}
