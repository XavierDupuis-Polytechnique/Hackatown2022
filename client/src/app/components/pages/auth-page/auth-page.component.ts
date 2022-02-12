import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
    constructor(private auth: AuthService) {}

    ngOnInit(): void {
        this.auth.isLoggedIn$.subscribe((val) => console.log(val));
    }
}
