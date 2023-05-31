import { Component } from "@angular/core";
import {FormGroup} from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form = new FormGroup({});
  model = {};

  fields: FormlyFieldConfig[] = [
    {
      type: 'string',
      props: {
        label: 'Test string',
        required: true,
      }
    },
    {
      type: 'number',
      props: {
        label: 'Test number'
      }
    }
  ];

  onSubmit() {
    console.log('submit')
  }
}
