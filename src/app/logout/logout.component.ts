import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component ({
    selector: 'logout',
    template: ""
})

export class LogoutComponent implements OnInit {
    isLoggedIn: boolean;

    router: Router;

    constructor(private loginService: LoginService) { }

    ngOnInit() {
        this.isLoggedIn = this.loginService.getLoggedInStatus();
        this.loginService.loginStatusChanged.subscribe(
            status => {
                this.isLoggedIn = false;
                this.router.navigate(['./']);
            }
        )
    }

}