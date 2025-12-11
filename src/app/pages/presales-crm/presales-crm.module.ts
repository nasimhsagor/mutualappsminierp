import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModule, NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { PresalesCRMRoutingModule } from './presales-crm-routing.module';
import { CustomerMasterComponent } from './customer-master/customer-master.component';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { CreateQuotationComponent } from './create-quotation/create-quotation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateQuotationComponent,
    QuotationListComponent,
    CustomerMasterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PresalesCRMRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgbModule,
    NgbDatepickerModule,
    NgbNavModule,
    NgbPaginationModule
  ]
})
export class PresalesCRMModule { }
