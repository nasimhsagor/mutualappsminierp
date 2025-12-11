import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { CreateQuotationComponent } from './create-quotation/create-quotation.component';
import { CustomerMasterComponent } from './customer-master/customer-master.component';


const routes: Routes = [
  {
    path: "customer-master",
    component: CustomerMasterComponent,
  },
  {
    path: "quotation-list",
    component: QuotationListComponent,
  },
   {
    path: "create-quotation",
    component: CreateQuotationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresalesCRMRoutingModule { }
