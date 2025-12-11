import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrl: './quotation-list.component.scss'
})
export class QuotationListComponent implements OnInit {

  quotations: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadMockQuotations();
  }

  loadMockQuotations() {
    this.quotations = [
      { id: 'Q-2023-001', date: '2023-11-01', customer: 'John Doe', total: 5500, status: 'Open' },
      { id: 'Q-2023-002', date: '2023-11-05', customer: 'ACME Corp', total: 12500, status: 'Converted' },
      { id: 'Q-2023-003', date: '2023-11-10', customer: 'Jane Smith', total: 3200, status: 'Open' }
    ];
  }

  convertToInvoice(quotation: any) {
    if (confirm(`Are you sure you want to convert ${quotation.id} to Invoice?`)) {
      quotation.status = 'Converted';
      alert(`Quotation ${quotation.id} converted to Invoice successfully!`);
    }
  }
}
