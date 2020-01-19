import { Component} from '@angular/core';

@Component({
  selector: 'pm-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent{
  private showCars:boolean=false;
  private addCar:boolean=false;
  constructor() { }
  displayCars():void{
    this.showCars=!this.showCars;
    this.addCar=false;
  }
  displayAddCar():void{
    this.addCar=!this.addCar;
    this.showCars=false;
  }
}
