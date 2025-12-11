import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-entry',
  templateUrl: './purchase-entry.component.html',
  styleUrl: './purchase-entry.component.scss'
})
export class PurchaseEntryComponent implements OnInit {
  purchaseForm!: FormGroup;
  suppliers: any[] = [
    { id: 1, name: 'ABC Suppliers' },
    { id: 2, name: 'XYZ Traders' },
    { id: 3, name: 'Global Imports' }
  ];

  products: any[] = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mouse', price: 500 },
    { id: 3, name: 'Keyboard', price: 1200 },
    { id: 4, name: 'Monitor', price: 15000 }
  ];

  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.addItem();
  }

  initForm() {
    this.purchaseForm = this.formBuilder.group({
      supplier: ['', [Validators.required]],
      referenceNo: [''],
      purchaseDate: ['', [Validators.required]],
      items: this.formBuilder.array([]),
      subTotal: [0],
      taxAmount: [0],
      grandTotal: [0],
      notes: ['']
    });
  }

  get items(): FormArray {
    return this.purchaseForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      product: ['', [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      rate: [0, [Validators.required, Validators.min(0)]],
      tax: [0, [Validators.min(0)]],
      total: [0]
    });
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
    this.calculateTotals();
  }

  onProductSelect(index: number) {
    const item = this.items.at(index);
    const selectedProduct = item.get('product')?.value;

    if (selectedProduct) {
      item.patchValue({
        rate: selectedProduct.price
      });
      this.calculateRowTotal(index);
    }
  }

  calculateRowTotal(index: number) {
    const item = this.items.at(index);
    const qty = item.get('quantity')?.value || 0;
    const rate = item.get('rate')?.value || 0;

    let total = qty * rate;

    item.patchValue({ total: total }, { emitEvent: false });
    this.calculateTotals();
  }

  calculateTotals() {
    let subTotal = 0;
    let totalTax = 0;

    this.items.controls.forEach(control => {
      const qty = control.get('quantity')?.value || 0;
      const rate = control.get('rate')?.value || 0;
      const taxPercent = control.get('tax')?.value || 0;

      const lineTotal = qty * rate;
      const taxAmount = (lineTotal * taxPercent) / 100;

      subTotal += lineTotal;
      totalTax += taxAmount;
    });

    const grandTotal = subTotal + totalTax;

    this.purchaseForm.patchValue({
      subTotal: subTotal,
      taxAmount: totalTax,
      grandTotal: grandTotal
    }, { emitEvent: false });
  }

  onSubmit() {
    this.submitted = true;
    if (this.purchaseForm.valid) {
      console.log('Form Submitted', this.purchaseForm.value);
    }
  }
}
