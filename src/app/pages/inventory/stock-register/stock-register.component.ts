import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-register',
  templateUrl: './stock-register.component.html',
  styleUrl: './stock-register.component.scss'
})
export class StockRegisterComponent implements OnInit {

  stockForm!: FormGroup;
  submitted = false;

  items = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Office Chair' },
    { id: 3, name: 'A4 Paper Ream' }
  ];

  transactions: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.loadMockTransactions();
  }

  initForm() {
    this.stockForm = this.formBuilder.group({
      item: [null, [Validators.required]],
      transactionDate: ['', [Validators.required]],
      type: ['In', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      remarks: ['']
    });
  }

  loadMockTransactions() {
    this.transactions = [
      { id: 1, date: '2023-11-20', item: 'Laptop', type: 'In', quantity: 50, remarks: 'Opening Stock' },
      { id: 2, date: '2023-11-22', item: 'Office Chair', type: 'Out', quantity: 5, remarks: 'Sales Order #123' }
    ];
  }

  get f() { return this.stockForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.stockForm.invalid) {
      return;
    }

    const formValue = this.stockForm.value;
    const newItemName = this.items.find(x => x.id === formValue.item)?.name;

    // Create new transaction object
    const newTransaction = {
      id: this.transactions.length + 1,
      date: typeof formValue.transactionDate === 'object' ? `${formValue.transactionDate.year}-${formValue.transactionDate.month}-${formValue.transactionDate.day}` : formValue.transactionDate,
      item: newItemName,
      type: formValue.type,
      quantity: formValue.quantity,
      remarks: formValue.remarks
    };

    this.transactions.unshift(newTransaction);
    this.submitted = false;
    this.stockForm.reset({ type: 'In' });
    alert('Stock adjustment recorded successfully.');
  }
}
