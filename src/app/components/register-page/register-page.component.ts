import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators,} from '@angular/forms';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;
  showDetails: boolean | undefined;
  submitted = false;


  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,]),
      confirmPassword: new FormControl('', [Validators.required,]),
    });
  }

  onSubmit() {
    this.authenticationService.register(
      this.registerForm.get('username')!.value,
      this.registerForm.get('email')!.value,
      this.registerForm.get('password')!.value,
      this.registerForm.get('confirmedPassword')!.value,
    );
    console.log(this.registerForm.value)
  }
}
