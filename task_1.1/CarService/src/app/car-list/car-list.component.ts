import { Component } from '@angular/core';
import { Car } from 'src/models/modelCar';
import { CarsLocalStorageService } from '../cars-local-storage.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  header = 'Lista samochodów';
  
  cars = [  
    {    "id": 1,    "make": "Toyota",    "model": "Corolla",    "year": 2018,    "inspection_due": "2022-05-31"  },
    {    "id": 2,    "make": "Honda",    "model": "Civic",    "year": 2019,    "inspection_due": "2023-01-15"  },
    {    "id": 3,    "make": "Ford",    "model": "F-150",    "year": 2020,    "inspection_due": "2024-02-28"  },
    {    "id": 4,    "make": "Chevrolet",    "model": "Silverado",    "year": 2021,    "inspection_due": "2025-08-10"  },
    {    "id": 5,    "make": "Nissan",    "model": "Altima",    "year": 2017,    "inspection_due": "2021-12-01"  },
    {    "id": 6,    "make": "BMW",    "model": "X5",    "year": 2016,    "inspection_due": "2022-06-30"  },
    {    "id": 7,    "make": "Mercedes-Benz",    "model": "C-Class",    "year": 2015,    "inspection_due": "2023-03-20"  },
    {    "id": 8,    "make": "Audi",    "model": "A4",    "year": 2022,    "inspection_due": "2026-09-05"  },
    {    "id": 9,    "make": "Jeep",    "model": "Wrangler",    "year": 2019,    "inspection_due": "2023-11-30"  },
    {    "id": 10,    "make": "Tesla",    "model": "Model S",    "year": 2020,    "inspection_due": "2024-07-12"  }
  ];

  carParts = [
    {"car_id":1, "part":"Silnik", "cost":5000},
    {"car_id":1, "part":"Klocki chamulcowe", "cost":650},
    {"car_id":1, "part":"Opony", "cost":250},
    {"car_id":1, "part":"Szyby", "cost":120},
    {"car_id":1, "part":"Pasy bezpieczeństwa", "cost":600},
    {"car_id":1, "part":"Żarówki", "cost":20},
    {"car_id":1, "part":"Chłodnica", "cost":450},
    {"car_id":1, "part":"Skrzynia biegów", "cost":2000},
    {"car_id":1, "part":"Wycieraczki", "cost":80},
    {"car_id":1, "part":"Drążki stabilizatorów", "cost":40},

    {"car_id":2, "part":"Silnik", "cost":4589},
    {"car_id":2, "part":"Szyby", "cost":220},
    {"car_id":2, "part":"Pasy bezpieczeństwa", "cost":600},
    {"car_id":2, "part":"Żarówki", "cost":258},
    {"car_id":2, "part":"Chłodnica", "cost":450},
    {"car_id":2, "part":"Wycieraczki", "cost":80},
    {"car_id":2, "part":"Drążki stabilizatorów", "cost":40},

   
    {"car_id":3, "part":"Opony", "cost":250},
    {"car_id":3, "part":"Szyby", "cost":320},
    {"car_id":3, "part":"Pasy bezpieczeństwa", "cost":600},
    {"car_id":3, "part":"Żarówki", "cost":20},
    {"car_id":3, "part":"Chłodnica", "cost":450},
    {"car_id":3, "part":"Skrzynia biegów", "cost":2000},

    {"car_id":4, "part":"Silnik", "cost":5000},
    {"car_id":4, "part":"Klocki chamulcowe", "cost":650},
    {"car_id":4, "part":"Opony", "cost":250},
    {"car_id":4, "part":"Szyby", "cost":420},
    {"car_id":4, "part":"Skrzynia biegów", "cost":2000},
    {"car_id":4, "part":"Wycieraczki", "cost":80},
    {"car_id":4, "part":"Drążki stabilizatorów", "cost":40},

    {"car_id":5, "part":"Silnik", "cost":5000},
    {"car_id":5, "part":"Klocki chamulcowe", "cost":650},
    {"car_id":5, "part":"Opony", "cost":250},
    {"car_id":5, "part":"Szyby", "cost":520},
    {"car_id":5, "part":"Pasy bezpieczeństwa", "cost":600},
    {"car_id":5, "part":"Żarówki", "cost":20},


    
    {"car_id":6, "part":"Skrzynia biegów", "cost":2000},
    {"car_id":6, "part":"Wycieraczki", "cost":80},
    {"car_id":6, "part":"Drążki stabilizatorów", "cost":40},

    {"car_id":7, "part":"Silnik", "cost":5000},
    {"car_id":7, "part":"Szyby", "cost":720},
    {"car_id":7, "part":"Pasy bezpieczeństwa", "cost":600},
    {"car_id":7, "part":"Żarówki", "cost":20},
    {"car_id":7, "part":"Chłodnica", "cost":450},
    {"car_id":7, "part":"Skrzynia biegów", "cost":2000},
    {"car_id":7, "part":"Wycieraczki", "cost":80},
    {"car_id":7, "part":"Drążki stabilizatorów", "cost":40},

    {"car_id":8, "part":"Klocki chamulcowe", "cost":650},
    {"car_id":8, "part":"Opony", "cost":250},
    {"car_id":8, "part":"Szyby", "cost":820},
    {"car_id":8, "part":"Drążki stabilizatorów", "cost":40},

    {"car_id":9, "part":"Silnik", "cost":5000},
    {"car_id":9, "part":"Klocki chamulcowe", "cost":650},
    {"car_id":9, "part":"Opony", "cost":250},
    {"car_id":9, "part":"Szyby", "cost":920},
    {"car_id":9, "part":"Pasy bezpieczeństwa", "cost":600},
    {"car_id":9, "part":"Żarówki", "cost":20},
    {"car_id":9, "part":"Chłodnica", "cost":450},
    {"car_id":9, "part":"Skrzynia biegów", "cost":2000},
    {"car_id":9, "part":"Wycieraczki", "cost":80},
    {"car_id":9, "part":"Drążki stabilizatorów", "cost":40},

    {"car_id":10, "part":"Silnik", "cost":5000},
    {"car_id":10, "part":"Klocki chamulcowe", "cost":650},
    {"car_id":10, "part":"Opony", "cost":250},
    {"car_id":10, "part":"Szyby", "cost":120},
    {"car_id":10, "part":"Skrzynia biegów", "cost":2000},
    {"car_id":10, "part":"Wycieraczki", "cost":80},
    {"car_id":10, "part":"Drążki stabilizatorów", "cost":40}

  ]



  constructor(private carService: CarsLocalStorageService) { }

  initialize(): void {
    // this.carService.setCars(this.cars);
    localStorage.setItem("cars", JSON.stringify(this.cars))
    localStorage.setItem("carParts", JSON.stringify(this.carParts))
    location.reload()
    alert("Zapisano dane w localSotage. Odśwież stronę")
  }

  carsFromStorage!: Car[];

  ngOnInit() {
    this.carsFromStorage = this.carService.getCars();
  }

}
