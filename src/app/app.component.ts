import { Component } from '@angular/core';
import { DialogsService } from '../services/dialogs/dialogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mat-template';
  constructor(dialogsService: DialogsService) {
    setTimeout(
      () =>
        dialogsService.openConfirm({
          title: 'TEST',
          description: 'lorem lorem lorem',
        }),
      5000
    );
  }
}
