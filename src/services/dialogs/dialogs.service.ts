import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog/dialog-config';
import { IDialogCloseResponse } from '../../interfaces/dialog-close-response.interface';
import { ConfirmDialogComponent } from '../../app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { IDialogConfirmData } from '../../interfaces/dialog-confirm-data.interface';
import { ComponentType } from '@angular/cdk/overlay';

const DEFAULT_CONFIG: MatDialogConfig = {
  width: '500px',
  autoFocus: false,
  role: 'dialog',
};

@Injectable({
  providedIn: 'root',
})
/** Сервис для работы с диалоговыми окнами */
export class DialogsService {
  constructor(private _dialog: MatDialog) {}

  /** Открытие диалогового окна подтверждения действия */
  public openConfirm(
    data: IDialogConfirmData
  ): MatDialogRef<ConfirmDialogComponent, IDialogCloseResponse> {
    return this.generateDialog(ConfirmDialogComponent, {
      data,
      role: 'alertdialog',
      disableClose: true,
    });
  }

  /** Генерация, открытие и обработка события закрытия диалогового окна по переданному компоненту */
  private generateDialog<T>(
    component: ComponentType<T>,
    config?: MatDialogConfig
  ): MatDialogRef<T, IDialogCloseResponse> {
    return this._dialog.open<T, MatDialogConfig, IDialogCloseResponse>(
      component,
      Object.assign(DEFAULT_CONFIG, config || {})
    );
  }
}
