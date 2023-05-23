import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DialogComponent} from "./dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormModule} from "../form/form.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [DialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    FormModule,
  ],
})
export class DialogModule {}
