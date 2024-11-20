import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  @Input()
  public dataFromParent : string =""
  public msg : string = "message in child"
  constructor(){

  }
  ngOnInit(){

  }

}
