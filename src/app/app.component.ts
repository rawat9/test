import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      data: { name: this.name },
    });
  }
}
