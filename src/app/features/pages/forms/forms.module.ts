import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { DynamicFormModule } from 'src/app/core/components/dynamic-form/dynamic-form.module';


@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    DynamicFormModule
  ]
})
export class FormsModule { }
