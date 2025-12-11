import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-quotation',
  templateUrl: './create-quotation.component.html',
  styleUrl: './create-quotation.component.scss'
})
export class CreateQuotationComponent implements OnInit {

  quotationForm!: FormGroup;
  submitted = false;

  customers: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@test.com' },
    { id: 3, name: 'ACME Corp', email: 'contact@acme.com' }
  ];

  products: any[] = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 },
    { id: 3, name: 'Service C', price: 500 }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.addItem();
  }

  initForm() {
    this.quotationForm = this.formBuilder.group({
      customer: ['', [Validators.required]],
      quotationDate: ['', [Validators.required]],
      expiryDate: [''],
      items: this.formBuilder.array([]),
      subTotal: [0],
      taxAmount: [0],
      grandTotal: [0],
      notes: ['']
    });
  }

  get items(): FormArray {
    return this.quotationForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      product: ['', [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      rate: [0, [Validators.required, Validators.min(0)]],
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

    this.items.controls.forEach(control => {
      const qty = control.get('quantity')?.value || 0;
      const rate = control.get('rate')?.value || 0;
      subTotal += (qty * rate);
    });

    // Hardcoded 5% tax for demo
    const taxAmount = (subTotal * 5) / 100;
    const grandTotal = subTotal + taxAmount;

    this.quotationForm.patchValue({
      subTotal: subTotal,
      taxAmount: taxAmount,
      grandTotal: grandTotal
    }, { emitEvent: false });
  }

  onSubmit() {
    this.submitted = true;
    if (this.quotationForm.valid) {
      console.log('Quotation Created', this.quotationForm.value);
      alert('Quotation created successfully! Check console for data.');
    }
  }
}
