import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CarsLocalStorageService } from '../cars-local-storage.service';
import {switchMap} from 'rxjs/operators'
import { Car } from 'src/models/modelCar';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  constructor(private service: CarsLocalStorageService, private route:ActivatedRoute){}

  carFromStorage!: any;
  partsFromStorage!: any[];

  ngOnInit(): void {
  const idParam = this.route.snapshot.paramMap.get("id")
  if (idParam){
    const id = +idParam
    this.carFromStorage = this.service.getCarById(id)
    this.partsFromStorage = this.service.getParts(id)
  }
}
 
}
