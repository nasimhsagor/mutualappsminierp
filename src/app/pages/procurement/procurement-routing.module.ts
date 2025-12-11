import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierMasterComponent } from './supplier-master/supplier-master.component';
import { PurchaseEntryComponent } from './purchase-entry/purchase-entry.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { SupplierPaymentComponent } from './supplier-payment/supplier-payment.component';

const routes: Routes = [
  {
    path: "supplier-master",
    component: SupplierMasterComponent,
  },
  {
    path: "purchase-entry",
    component: PurchaseEntryComponent,
  },
   {
    path: "purchase-history",
    component: PurchaseHistoryComponent,
  },
   {
    path: "supplier-payment",
    component: SupplierPaymentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementRoutingModule { }
