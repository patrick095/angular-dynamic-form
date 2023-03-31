import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule { }
