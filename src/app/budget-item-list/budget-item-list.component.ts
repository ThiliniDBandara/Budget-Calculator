import { Component, OnInit, Input } from '@angular/core';
import { BudegetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudegetItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
