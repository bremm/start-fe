import { Component, OnInit, Input, Output, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';


export enum ModalStatus {
  Hidden = 0,
  Visible = 1,
  Accepted = 2,
  Dismiss = 3,
}

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() header?: string;
  @Input() textAccept?: string;
  @Input() textDismiss?: string;
  @Input() status: Subject<ModalStatus> = new Subject<ModalStatus>();

  @Output() onAccept = new EventEmitter<boolean>();

  private _disposableStatus: Subscription;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this._initInternalStatusSubscription();
    this.setVisability(false);
  }


  private _initInternalStatusSubscription(): void {
    this._disposableStatus = this.status.subscribe(
      (status) => {
        switch(+status){
          case ModalStatus.Hidden:
            this.setVisability(false);
            break;
          case ModalStatus.Visible:
            this.setVisability(true);
            break;
          case ModalStatus.Accepted:
            this.setVisability(false);
            this.onAccept.emit(true);
            break;
            case ModalStatus.Dismiss:
              this.setVisability(false);
              this.onAccept.emit(false);
            break;
        }
      }
    );
  }

  
  setVisability(visible: boolean): void {
    console.log("ModalInfoComponent.setVisability: "+visible);
    this.renderer.setStyle(this.elementRef.nativeElement, 
      "display", 
      visible? "table": "none");
  }

  
  setAccepted(accept: boolean): void {
    console.log("ModalInfoComponent.setAccepted: " + accept);
    accept ? 
      this.status.next(ModalStatus.Accepted) :
      this.status.next(ModalStatus.Dismiss);
  }

  ngOnDestroy() {
    this._disposableStatus.unsubscribe();
  }

}
