import { Component, OnInit } from '@angular/core';
import { toyotacars } from '../models'

export interface ToyotaNewestCars {
    
  name: string;
  type: string;
  cubic: number;
  hp: number;
  date: number;
  seats: number;
}

const ELEMENT_DATA: ToyotaNewestCars[] = [
  {name:  "Toyota C-HR", type: 'SUV', cubic: 1496, hp: 144, date: 2021, seats: 4 },
  {name:  "Toyota Yaris 2021", type: 'Sedan', cubic: 1496, hp: 107, date: 2021, seats: 4  },
  {name:  "New Gen Toyota Camry", type: 'Sedan', cubic: 2487, hp: 214.5, date: 2021, seats: 4 },
  {name:  "Toyota Ertiga", type: 'SUV', cubic: 1496, hp: 104, date: 2021, seats: 4 },
  {name:  "Toyota Corolla 2021", type: 'Sedan', cubic: 1198, hp: 169, date: 2021, seats: 4 },
  {name:  "Toyota RAV4 Hybrid", type: 'SUV', cubic: 2013, hp: 218, date: 2021, seats: 4 },
  {name:  "Toyota Raize", type: 'City car', cubic:  996, hp: 98, date: 2021, seats: 4 },
  {name:  "Toyota Mirai", type: 'Sports car', cubic: 3698, hp: 152, date: 2021, seats: 4 },
  {name:  "Toyota Rush", type: 'SUV', cubic: 1496, hp:  104, date: 2021, seats: 4 },
  {name:  "Toyota-Suzuki Crossover", type: 'SUV', cubic: 1496, hp:  103, date: 2021, seats: 4 },
] as Array<toyotacars>;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'cubic', 'hp', 'date', 'seats'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: ToyotaNewestCars[] = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
