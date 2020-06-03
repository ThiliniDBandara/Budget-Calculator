import { Component, OnInit } from '@angular/core';
import { BudegetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudegetItem[] = new Array<BudegetItem>();

  constructor() { }

  ngOnInit(): void {
     
  }
  addItem(newItem: BudegetItem){
    this.budgetItems.push(newItem)
  }
}
