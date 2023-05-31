import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyMaterialModule } from "@ngx-formly/material";
import { FormlyModule } from "@ngx-formly/core";
import { numericFieldValidator } from "./numeric-field-validator";
import { FormComponent } from "../form/form.component";

@NgModule({
  declarations: [DialogComponent, FormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      validators: [
        {
          name: 'numericFieldValidator',
          validation: numericFieldValidator,
        },
      ],
      validationMessages: [
        {
          name: 'numericFieldValidator',
          message: 'localized validation message',
        },
      ],
      types: [
        { name: 'string', extends: 'input' },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number',
            },
            validators: {
              validation: ['numericFieldValidator'],
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number',
            },
          },
        },
      ],
    }),
    ReactiveFormsModule,
  ],
  exports: [DialogComponent]
})
export class DialogModule {}
