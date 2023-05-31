import { AfterContentChecked, ChangeDetectorRef, Component } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements AfterContentChecked {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private changeDetector: ChangeDetectorRef,
) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges()
  }
}
