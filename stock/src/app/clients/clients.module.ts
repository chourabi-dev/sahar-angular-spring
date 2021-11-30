import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { PurchaseComponent } from './purchase/purchase.component';


@NgModule({
  declarations: [ClientsComponent, ListComponent, PurchaseComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class ClientsModule { }
