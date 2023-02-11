import { Component } from '@angular/core';
import { AuthService } from '@app/_services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  usernameEnv = environment.adminUsername;
  passwordEnv = environment.adminPassword;
  username!: string;
  password!: string;
  loggedIn: any;
  
  constructor(public auth: AuthService){ }

  login() {
    if (this.username === this.usernameEnv && this.password === this.passwordEnv) {
      this.auth.loggedIn = true;
      localStorage.setItem('loggedIn', 'true');
    }
  }
}
