import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { AlertController, ModalController } from '@ionic/angular';
import { NewBookingPage } from './new-booking/new-booking.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit
{
  constructor(
    private bookingSrvc: BookingsService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(){}

  getBookings()
  {
    this.bookingSrvc.fetchBookings()
    .subscribe((bookings) => {
      console.log(bookings);
    });
  }

  async presentAlertPrompt()
  {
    const alert = await this.alertCtrl.create({
      header: 'Delete Booking',
      inputs: [
        {
          name: 'bookingId',
          type: 'text',
          placeholder: "Enter the booking ID you want to delete:"
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: 'OK',
          handler: (data) => {
            this.bookingSrvc.deleteBooking(data.bookingId)
            .subscribe(() => {
              this.bookingSrvc.fetchBookings()
              .subscribe((bookings) => {
                console.log(bookings);
              });
              console.log("Booking deleted.");
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentModal()
  {
    const modal = await this.modalCtrl.create({
      component: NewBookingPage
    });
    return await modal.present();
  }

  newBooking() {
    this.presentModal();
  }

  deleteBooking() {
    this.presentAlertPrompt();
  }
}
