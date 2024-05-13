import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  public getUser() {
    return {
      fullname: 'Daniel Shaked',
      coins: 100
    }
  }
}
