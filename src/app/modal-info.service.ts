import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum ModalStatus {
  Hidden = 0,
  Visible = 1,
  Accepted = 2,
  Rejected = 3,
}

@Injectable({
  providedIn: 'root'
})
export class ModalInfoService {
  modalStatus = new Subject<ModalStatus>();
  constructor() { }
}
