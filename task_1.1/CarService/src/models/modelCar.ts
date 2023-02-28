export interface Car {
    id: number;
    make: string;
    model: string;
    year: number;
    inspection_due: string;
    parts: string[];
  };

export interface CarPart {
  car_id: number;
  part: string;
  cost: number;
};