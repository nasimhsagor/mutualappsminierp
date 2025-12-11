import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModule, NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { InventoryRoutingModule } from './inventory-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StockRegisterComponent } from './stock-register/stock-register.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { CurrentStockViewComponent } from './current-stock-view/current-stock-view.component';


@NgModule({
  declarations: [
    StockRegisterComponent,
    ItemMasterComponent,
    CurrentStockViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgbModule,
    NgbDatepickerModule,
    NgbNavModule,
    NgbPaginationModule
  ]
})
export class InventoryModule { }
