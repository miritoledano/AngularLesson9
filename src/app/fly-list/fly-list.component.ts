import { Component } from '@angular/core';
import fly from '../../assets/models/fly';

@Component({
  selector: 'app-fly-list',
  templateUrl: './fly-list.component.html',
  styleUrl: './fly-list.component.scss'
})
export class FlyListComponent {
arr:fly[]=[
  { id: 1, price: 150, ReleaseDate: new Date(2024, 4, 20) // 4 מייצג את מאי
  ,Returndate:new Date(2024, 5, 20)},
  { id: 2, price: 1520, ReleaseDate: new Date(2024,2,5),Returndate:new Date(2025,2,6) },
  { id: 3, price: 180, ReleaseDate: new Date(2024,3,5),Returndate:new Date(2025,2,5) },


]
f(f:fly){
  // id=arr[this.arr.length-1].id+1;
  f.id = this.arr.length > 0 ? this.arr[this.arr.length - 1].id + 1 : 1;
  this.arr.push(f);
}
g(id: number) {
  let index = this.arr.findIndex((item) => item.id === id);
  if (index > -1) {
    this.arr.splice(index, 1); // Use splice instead of slice
  }}
}
