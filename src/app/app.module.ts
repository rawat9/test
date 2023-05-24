import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from './dialog/dialog.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, DialogModule, MatButtonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
