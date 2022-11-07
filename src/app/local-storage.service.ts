import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setLocalStorage(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalstorage(key: string): any {
    const temp = window.localStorage.getItem(key);
    if (temp) {
      return JSON.parse(temp);
    }
    return undefined;
  }
}
