import { Component, OnInit, Input, Output, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Event } from '@angular/router';
import { ModalInfoService, ModalStatus } from '../modal-info.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {
  @Input() id: string;
  @Input() header?: string;
  @Input() textAccept?: string;
  @Input() textDismiss?: string;
  @Output() dismiss = new EventEmitter();
  @Output() accept = new EventEmitter();

  constructor(
    private modalService: ModalInfoService,
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.initSubscriptions();
    this.hide();
  }

  initSubscriptions(): void {
    this.modalService.modalStatus.subscribe(
      (status) => {
        switch(+status){
          case ModalStatus.Hidden:
            this.hide();
            break;
          case ModalStatus.Visible:
            this.show();
            break;
          case ModalStatus.Accepted:
            this.hide();
            break;
          case ModalStatus.Rejected:
            this.hide();
            break;
        }
      }
    );
  }

  hide(): void {
    console.log("Modal Dialog should hide");
    
    this.renderer.setStyle(this.elementRef.nativeElement, 
      "display", 
      "none");
  }
  
  show(): void {
    console.log("Modal Dialog should show");
    this.renderer.setStyle(this.elementRef.nativeElement, 
      "display", 
      "table");
  }


  onDismiss(event: Event): void {
    console.log("Modal Dialog should dismiss");
    this.modalService.modalStatus.next(ModalStatus.Rejected);
  }
  
  onAccept(event: Event): void {
    console.log("Modal Dialog should accept");
    this.modalService.modalStatus.next(ModalStatus.Accepted);
  }



}
