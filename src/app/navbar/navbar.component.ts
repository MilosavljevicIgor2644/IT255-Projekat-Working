import { Component, Directive, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { LoginService } from '../login/login.service';

@Component ({
    selector: "navbar",
    templateUrl: "./navbar.html"
})
export class NavbarComponent implements OnInit {
    isLoggedIn: boolean;
    constructor(private loginService: LoginService) { }

    ngOnInit() {
        this.isLoggedIn = this.loginService.getLoggedInStatus();
        this.loginService.loginStatusChanged.subscribe(
            (status: boolean) => {
                this.isLoggedIn = status;
            }  
        )
    }
}