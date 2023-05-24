import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  exports: [FormComponent],
})
export class FormModule {}
