import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public sidenavOpened: boolean = true;
  constructor() { }

  toggleSidenv() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
