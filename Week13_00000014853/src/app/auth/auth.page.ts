import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private modalCtrl: ModalController, private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
    this.authSvc.isAuthenticated.subscribe(resp => {
      if(resp) {
        console.log("User is authenticated");
        this.router.navigateByUrl('/home');
      }
      else {
        console.log("No user");
      }
    });
  }

  onSignUp(f: NgForm) {
    console.log(f.value); 
    this.authSvc.signup(f.value.email, f.value.pwd).subscribe(resp => {
      console.log(resp); 
    });
  }

  onLogin(f: NgForm) {
    console.log(f.value); 
    this.authSvc.login(f.value.email, f.value.pwd).subscribe(resp => {
      if(resp.idToken) { 
        console.log(resp); 
        this.router.navigateByUrl('/home');
      }
      else { 
        console.log("Failed to log in.");
      }
    },
    errorResp => { 
      console.log(errorResp);
    })
    
  }

  async presentSignUpModal() {
    const modal = await this.modalCtrl.create({
      component: SignUpComponent
    });
    return await modal.present();
  }
}
