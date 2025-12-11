import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier-payment',
  templateUrl: './supplier-payment.component.html',
  styleUrl: './supplier-payment.component.scss'
})
export class SupplierPaymentComponent implements OnInit {

  paymentForm!: FormGroup;
  submitted = false;

  suppliers = [
    { id: 1, name: 'ABC Suppliers', balance: 5000 },
    { id: 2, name: 'XYZ Traders', balance: 2500 }
  ];

  payments: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.loadMockPayments();
  }

  initForm() {
    this.paymentForm = this.formBuilder.group({
      supplier: [null, [Validators.required]],
      amount: ['', [Validators.required, Validators.min(1)]],
      paymentMode: ['Bank Transfer', [Validators.required]],
      paymentDate: ['', [Validators.required]],
      remarks: ['']
    });
  }

  loadMockPayments() {
    this.payments = [
      { id: 1, date: '2023-11-25', supplier: 'ABC Suppliers', amount: 2000, mode: 'Bank Transfer' },
      { id: 2, date: '2023-11-26', supplier: 'XYZ Traders', amount: 1000, mode: 'Cash' }
    ];
  }

  get f() { return this.paymentForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.paymentForm.invalid) {
      return;
    }

    const formValue = this.paymentForm.value;
    const supplierName = this.suppliers.find(x => x.id === formValue.supplier)?.name;

    const newPayment = {
      id: this.payments.length + 1,
      date: typeof formValue.paymentDate === 'object' ? `${formValue.paymentDate.year}-${formValue.paymentDate.month}-${formValue.paymentDate.day}` : formValue.paymentDate,
      supplier: supplierName,
      amount: formValue.amount,
      mode: formValue.paymentMode
    };

    this.payments.unshift(newPayment);
    this.submitted = false;
    this.paymentForm.reset({ paymentMode: 'Bank Transfer' });
    alert('Payment recorded successfully.');
  }
}
