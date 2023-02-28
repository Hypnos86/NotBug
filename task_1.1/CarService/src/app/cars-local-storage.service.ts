import { Injectable } from '@angular/core';
import { Car, CarPart } from 'src/models/modelCar';

@Injectable({
  providedIn: 'root'
})
export class CarsLocalStorageService {
  
  private readonly STORAGE_KEY = 'cars';
  private readonly STORAGE_KEY_PARTS = 'carParts';

  constructor() { }

  getCars(): Car[] {
    const cars = localStorage.getItem(this.STORAGE_KEY);
    return cars? JSON.parse(cars) : [];
  }

  setCars(cars: Car[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cars));
  }

  getCarById(id:number){
    const car = this.getCars().find(x=>x.id == id)
    return car;
  }

  getParts(id:number):CarPart[] {
    const parts = localStorage.getItem(this.STORAGE_KEY_PARTS);
    const detailParts = parts? JSON.parse(parts) : [];
    return detailParts.filter((x: { car_id: number; })=>x.car_id==id)
  }

}
