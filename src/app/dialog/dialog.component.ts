import { AfterContentChecked, ChangeDetectorRef, Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface DialogData {
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements AfterContentChecked {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private changeDetector: ChangeDetectorRef,
) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges()
  }
}
