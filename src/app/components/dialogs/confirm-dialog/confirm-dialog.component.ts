import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDialogCloseResponse } from '../../../../interfaces/dialog-close-response.interface';
import { IDialogConfirmData } from '../../../../interfaces/dialog-confirm-data.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
  constructor(
    private _dialogRef: MatDialogRef<
      ConfirmDialogComponent,
      IDialogCloseResponse
    >,
    @Inject(MAT_DIALOG_DATA) public data: IDialogConfirmData
  ) {}

  public btnHandler(isResolution: IDialogCloseResponse['isResolution']): void {
    this._dialogRef.close({ isResolution });
  }
}
