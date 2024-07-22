import { Component,Input, Output,EventEmitter } from '@angular/core';
import fly from '../../assets/models/fly';


@Component({
  selector: 'app-fly-one2',
  templateUrl: './fly-one2.component.html',
  styleUrl: './fly-one2.component.scss'
})
export class FlyOne2Component {
  @Input()
 
myFly:fly=  { id: 1, price: 150, ReleaseDate: new Date(2024, 4, 20), // 4 מייצג את מאי
Returndate:new Date(2024, 5, 20)
}
@Output()
deleteFlyEvent:EventEmitter<number>=new EventEmitter<number>();
delete(){
  this.deleteFlyEvent.emit(this.myFly.id)
    }
}
