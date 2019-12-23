import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
    private authSvc: AuthService) { }

  ngOnInit() { }

  onSignUp(f: NgForm) {
    console.log(f.value); //cetak isi dari f
    this.authSvc.signup(f.value.email, f.value.pwd).subscribe(resp => {
      console.log(resp); //cetak isi dari subscribe
      this.modalCtrl.dismiss(); //begitu tombol sign up di modal diklik
    })
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
