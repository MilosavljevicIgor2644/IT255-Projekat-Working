import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class LoginService {
    private isLoggedIn: boolean; 
    loginStatusChanged: EventEmitter<boolean> = new EventEmitter();

    getLoggedInStatus() {
        return this.isLoggedIn;   
    }

    setLoggedInStatus(status: boolean) {
        this.isLoggedIn = status;
        this.loginStatusChanged.emit(status);
    }
}