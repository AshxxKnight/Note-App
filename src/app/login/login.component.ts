import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  error = false

  get email() { return this.Login.get('email') }
  get password() { return this.Login.get('password') }

  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  r: any

  login() {
    console.log(this.Login.value)

    this.user.getlogin(this.Login.value.email).subscribe((result) => {
      console.warn(result)
      this.r = result

      if (result == null) {

        this.error = true
      }
      else {

        if (this.r.password === this.Login.value.password) {
          localStorage.setItem("logged", "true")
          this.router.navigate(['/view']);

        }
        else {
          this.error = true
        }
      }



    })



  }



}
