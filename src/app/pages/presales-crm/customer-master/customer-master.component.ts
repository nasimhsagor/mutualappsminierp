import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrl: './customer-master.component.scss'
})
export class CustomerMasterComponent implements OnInit {

  customerForm!: FormGroup;
  submitted = false;
  customers: any[] = [];
  isEditMode = false;
  currentId: number | null = null;

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initForm();
    this.loadMockCustomers();
  }

  initForm() {
    this.customerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      phone: ['', [Validators.required]],
      address: [''],
      openingBalance: [0]
    });
  }

  loadMockCustomers() {
    this.customers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', address: '123 Main St', openingBalance: 1000 },
      { id: 2, name: 'Jane Smith', email: 'jane@test.com', phone: '9876543210', address: '456 Oak Ave', openingBalance: 500 }
    ];
  }

  openModal(content: any) {
    this.submitted = false;
    this.isEditMode = false;
    this.currentId = null;
    this.customerForm.reset({ openingBalance: 0 });
    this.modalService.open(content, { centered: true });
  }

  editCustomer(customer: any, content: any) {
    this.submitted = false;
    this.isEditMode = true;
    this.currentId = customer.id;
    this.customerForm.patchValue(customer);
    this.modalService.open(content, { centered: true });
  }

  get f() { return this.customerForm.controls; }

  onSubmit(modal: any) {
    this.submitted = true;
    if (this.customerForm.invalid) {
      return;
    }

    const formValue = this.customerForm.value;

    if (this.isEditMode && this.currentId) {
      const index = this.customers.findIndex(c => c.id === this.currentId);
      if (index !== -1) {
        this.customers[index] = { ...formValue, id: this.currentId };
      }
    } else {
      const newId = this.customers.length > 0 ? Math.max(...this.customers.map(c => c.id)) + 1 : 1;
      this.customers.push({ ...formValue, id: newId });
    }

    modal.close();
  }
}
