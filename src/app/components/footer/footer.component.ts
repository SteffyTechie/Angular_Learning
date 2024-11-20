import { Component } from '@angular/core';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
public serviceVar : string = ""

constructor(private eventService : EventService){

}
ngOnInit(){
  this.eventService.key.subscribe((i)=>{console.log(i)
    this.serviceVar = i
  })
}
}
