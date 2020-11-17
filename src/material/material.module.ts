import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatSlideToggleModule,
  ],
})
export class MaterialModule {}
