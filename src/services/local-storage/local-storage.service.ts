import { Injectable } from '@angular/core';
import { ITheme } from '../../interfaces/theme.interface';
import { IThemeLocalStorage } from '../../interfaces/theme-local-storage.interface';

@Injectable({
  providedIn: 'root',
})
/** Севис для работы с Local Storage */
export class LocalStorageService {
  private _localStorage: Storage;
  private _keyThemeLocalStorage = 'theme';

  constructor() {
    this._localStorage = window.localStorage;
  }

  /** Сохранение выбранной id темы в Local Storage */
  public saveTheme(themeId: ITheme['id'], isDark, isContrast): void {
    const themeInfo = {
      id: themeId,
      isDark,
      isContrast,
    };
    this._localStorage.setItem(
      this._keyThemeLocalStorage,
      JSON.stringify(themeInfo)
    );
  }

  /** Получение ранне выбранной id темы из Local Storage */
  public getTheme(): IThemeLocalStorage {
    let result: IThemeLocalStorage = null;
    const theme = this._localStorage.getItem(this._keyThemeLocalStorage);
    if (theme) {
      result = JSON.parse(theme);
    }
    return result;
  }
}
