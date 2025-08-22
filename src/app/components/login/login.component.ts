import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { credential } from './types/Credential';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  ngOnInit(): void {
    (window as any).loginGoogle = this.loginGoogle.bind(this);
  }

  loginGoogle(response: credential) {
    // Fluxo Google
    console.log(response);
    console.log('Login with Google');
  }
}
