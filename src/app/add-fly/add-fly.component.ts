import { Component, EventEmitter, Output } from '@angular/core';
import fly from '../../assets/models/fly';

@Component({
  selector: 'app-add-fly',
  templateUrl: './add-fly.component.html',
  styleUrl: './add-fly.component.scss'
})
export class AddFlyComponent {
  @Output()
  addFlyEvent:EventEmitter<fly>=new EventEmitter<fly>();
  emptyFly: fly = {
    price: 0,
    id:0,
    ReleaseDate: new Date(),
    Returndate: new Date()
  };

  add(){
    this.addFlyEvent.emit(this.emptyFly);
    this.emptyFly= {
      price: 0,
      id:0,
      ReleaseDate: new Date(),
      Returndate: new Date()
    };
  }

  
 

}
