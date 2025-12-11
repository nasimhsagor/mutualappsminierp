import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrl: './supplier-master.component.scss'
})
export class SupplierMasterComponent implements OnInit {

  supplierForm!: FormGroup;
  submitted = false;
  suppliers: any[] = [];
  isEditMode = false;
  currentId: number | null = null;

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initForm();
    this.loadMockSuppliers();
  }

  initForm() {
    this.supplierForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      contactPerson: [''],
      email: ['', [Validators.email]],
      phone: ['', [Validators.required]],
      address: [''],
      balance: [0]
    });
  }

  loadMockSuppliers() {
    this.suppliers = [
      { id: 1, name: 'ABC Suppliers', contactPerson: 'John', email: 'john@abc.com', phone: '1234567890', address: 'NY, USA', balance: 5000 },
      { id: 2, name: 'XYZ Traders', contactPerson: 'Mike', email: 'mike@xyz.com', phone: '9876543210', address: 'London, UK', balance: 2500 }
    ];
  }

  openModal(content: any) {
    this.submitted = false;
    this.isEditMode = false;
    this.currentId = null;
    this.supplierForm.reset({ balance: 0 });
    this.modalService.open(content, { centered: true });
  }

  editSupplier(supplier: any, content: any) {
    this.submitted = false;
    this.isEditMode = true;
    this.currentId = supplier.id;
    this.supplierForm.patchValue(supplier);
    this.modalService.open(content, { centered: true });
  }

  get f() { return this.supplierForm.controls; }

  onSubmit(modal: any) {
    this.submitted = true;
    if (this.supplierForm.invalid) {
      return;
    }

    const formValue = this.supplierForm.value;

    if (this.isEditMode && this.currentId) {
      const index = this.suppliers.findIndex(x => x.id === this.currentId);
      if (index !== -1) {
        this.suppliers[index] = { ...formValue, id: this.currentId };
      }
    } else {
      const newId = this.suppliers.length > 0 ? Math.max(...this.suppliers.map(x => x.id)) + 1 : 1;
      this.suppliers.push({ ...formValue, id: newId });
    }

    modal.close();
  }
}
