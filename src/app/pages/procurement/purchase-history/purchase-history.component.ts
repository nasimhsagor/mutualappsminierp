import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrl: './purchase-history.component.scss'
})
export class PurchaseHistoryComponent implements OnInit {

  purchases: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadMockPurchases();
  }

  loadMockPurchases() {
    this.purchases = [
      { id: 'PUR-2023-001', date: '2023-11-15', supplier: 'ABC Suppliers', amount: 50000, status: 'Received' },
      { id: 'PUR-2023-002', date: '2023-11-18', supplier: 'XYZ Traders', amount: 15600, status: 'Pending' },
      { id: 'PUR-2023-003', date: '2023-11-20', supplier: 'Global Imports', amount: 75000, status: 'Received' }
    ];
  }
}
