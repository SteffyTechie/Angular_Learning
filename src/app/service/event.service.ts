import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public key = new EventEmitter<string>();
  
  constructor() { }
}
