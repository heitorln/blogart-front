import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';
  constructor(private authService: AuthService) { }
  login() {
    const credentials = { username: this.username, password: this.password };

    this.authService.login(credentials).subscribe(
      (response) => {
        const token = response.token;
        const userId = response.userId;

        this.authService.setToken(token);
        this.authService.setUserId(userId);
      },
      (error) => {
        console.error('Error while logging in:', error);
      }
    );
  }
}
