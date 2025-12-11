import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-stock-view',
  templateUrl: './current-stock-view.component.html',
  styleUrl: './current-stock-view.component.scss'
})
export class CurrentStockViewComponent implements OnInit {

  stocks: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadMockStocks();
  }

  loadMockStocks() {
    this.stocks = [
      { id: 1, name: 'Laptop', sku: 'LAP001', category: 'Electronics', onHand: 45, unit: 'pcs' },
      { id: 2, name: 'Office Chair', sku: 'FUR001', category: 'Furniture', onHand: 12, unit: 'pcs' },
      { id: 3, name: 'A4 Paper Ream', sku: 'STA001', category: 'Stationery', onHand: 150, unit: 'ream' },
      { id: 4, name: 'Wireless Mouse', sku: 'PER001', category: 'IT Peripherals', onHand: 30, unit: 'pcs' }
    ];
  }
}
