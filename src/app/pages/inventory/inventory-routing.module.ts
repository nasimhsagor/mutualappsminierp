import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockRegisterComponent } from './stock-register/stock-register.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { CurrentStockViewComponent } from './current-stock-view/current-stock-view.component';

const routes: Routes = [
     {
       path: "item-master",
       component: ItemMasterComponent,
     },
     {
       path: "current-stock-view",
       component: CurrentStockViewComponent,
     },
     {
       path: "stock-register",
       component: StockRegisterComponent,
     },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
