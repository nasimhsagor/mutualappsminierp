import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrl: './item-master.component.scss'
})
export class ItemMasterComponent implements OnInit {

  itemForm!: FormGroup;
  submitted = false;
  items: any[] = [];
  isEditMode = false;
  currentId: number | null = null;
  categories = ['Electronics', 'Stationery', 'Furniture', 'IT Peripherals'];

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initForm();
    this.loadMockItems();
  }

  initForm() {
    this.itemForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      sku: ['', [Validators.required]],
      category: [null, [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      unit: ['pcs', [Validators.required]]
    });
  }

  loadMockItems() {
    this.items = [
      { id: 1, name: 'Laptop', sku: 'LAP001', category: 'Electronics', price: 50000, unit: 'pcs' },
      { id: 2, name: 'Office Chair', sku: 'FUR001', category: 'Furniture', price: 4500, unit: 'pcs' },
      { id: 3, name: 'A4 Paper Ream', sku: 'STA001', category: 'Stationery', price: 250, unit: 'ream' }
    ];
  }

  openModal(content: any) {
    this.submitted = false;
    this.isEditMode = false;
    this.currentId = null;
    this.itemForm.reset({ price: 0, unit: 'pcs' });
    this.modalService.open(content, { centered: true });
  }

  editItem(item: any, content: any) {
    this.submitted = false;
    this.isEditMode = true;
    this.currentId = item.id;
    this.itemForm.patchValue(item);
    this.modalService.open(content, { centered: true });
  }

  get f() { return this.itemForm.controls; }

  onSubmit(modal: any) {
    this.submitted = true;
    if (this.itemForm.invalid) {
      return;
    }

    const formValue = this.itemForm.value;

    if (this.isEditMode && this.currentId) {
      const index = this.items.findIndex(x => x.id === this.currentId);
      if (index !== -1) {
        this.items[index] = { ...formValue, id: this.currentId };
      }
    } else {
      const newId = this.items.length > 0 ? Math.max(...this.items.map(x => x.id)) + 1 : 1;
      this.items.push({ ...formValue, id: newId });
    }

    modal.close();
  }
}
