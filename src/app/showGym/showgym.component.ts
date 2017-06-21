import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Gym } from '../gym';
import { FormGroup, FormControl } from '@angular/forms';
import { Headers } from '@angular/http';

@Component ({
    selector: "showGym",
    templateUrl: "./showGym.html"
})

export class ShowGymComponent{
    private gyms: any;
    http: Http;
    router: Router;

    deleteForm = new FormGroup({
        delete: new FormControl()
    });

    

    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;

        if (localStorage.getItem('token') != null) {
            this.router.navigate(['./']);
        }
    }



    onDelete():void{
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('delete', this.deleteForm.value.delete);
        var data = "id=";
        data += this.deleteForm.value.delete.toString();
        alert(data);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/it255v11/deleteGym.php', data, {
            headers: headers
        })
            .subscribe(
            data => {
                if (data["_body"] == "ok") {
                    alert("Uspesno obrisana teretana iz liste");
                }
            }
            );
    }

    ngOnInit() {
        this.http.get("http://localhost/it255v11/returnGyms.php")
            .subscribe(
                (gyms) => {
                    console.log(gyms);
                    this.gyms = JSON.parse(gyms["_body"]).records;
                    console.log(this.gyms);
                }, 
                (error) => {
                    console.log(error.text);
                }
            );
    }
}