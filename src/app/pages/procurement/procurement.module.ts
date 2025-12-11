import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDatepickerModule, NgbModule, NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProcurementRoutingModule } from './procurement-routing.module';
import { SupplierMasterComponent } from './supplier-master/supplier-master.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PurchaseEntryComponent } from './purchase-entry/purchase-entry.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { SupplierPaymentComponent } from './supplier-payment/supplier-payment.component';


@NgModule({
  declarations: [
    SupplierMasterComponent,
    PurchaseEntryComponent,
    PurchaseHistoryComponent,
    SupplierPaymentComponent,
  ],
  imports: [
    CommonModule,
    ProcurementRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgbModule,
    NgbDatepickerModule,
    NgbNavModule,
    NgbPaginationModule
  ]
})
export class ProcurementModule { }
