import { Component, EventEmitter, Output } from '@angular/core';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Output()
  public value = new EventEmitter<string>();

  constructor(private eventService : EventService){

  }
  ngOnInit(){

  }
  passData(){
    console.log("button clicked")
    this.value.emit("event binding")
    this.eventService.key.emit("data to service")
    
  }

}
