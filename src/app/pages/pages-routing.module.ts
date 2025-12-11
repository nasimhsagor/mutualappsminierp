import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";

const routes: Routes = [
    {
        path: "",
        component: DashboardComponent
    },
    {
      path: 'procurement', loadChildren: () => import('./procurement/procurement.module').then(m => m.ProcurementModule)
    },
    {
      path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
    },
     {
      path: 'presales-crm', loadChildren: () => import('./presales-crm/presales-crm.module').then(m => m.PresalesCRMModule)
    },
     
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
