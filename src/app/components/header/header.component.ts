import { Component, ViewChild } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';
import { ITheme } from '../../../interfaces/theme.interface';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('darkToggle') darkToggle: MatSlideToggle;
  @ViewChild('contrastToggle') contrastToggle: MatSlideToggle;
  public isDark: boolean;
  public isContrast: boolean;

  constructor(
    public themeService: ThemeService,
    private _localStorageService: LocalStorageService
  ) {
    const activeTheme = this.themeService.getActiveTheme();
    this.isDark = activeTheme.isDark;
    this.isContrast = activeTheme.isContrast;
  }

  public themHandler(id: ITheme['id']): void {
    this.applyTheme(id);
  }

  public toggleHandler(): void {
    const activeTheme = this.themeService.getActiveTheme();
    this.applyTheme(activeTheme.id);
  }

  private applyTheme(themeId: ITheme['id']): void {
    this.themeService.applyTheme(themeId, this.isDark, this.isContrast);
  }
}
