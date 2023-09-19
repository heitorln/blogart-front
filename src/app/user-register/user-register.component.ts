import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  name: string = '';

  constructor(private authService: AuthService) { }

  register() {
    const userData = {
      username: this.username,
      password: this.password,
      email: this.email,
      name: this.name
    };

    this.authService.registerUser(userData).subscribe(
      (response) => {},
      (error) => {
        console.error('Error while registering  user:', error);
      }
    );
  }
}
