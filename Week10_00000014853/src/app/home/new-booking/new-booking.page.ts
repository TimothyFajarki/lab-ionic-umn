import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookingsService } from '../bookings.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.page.html',
  styleUrls: ['./new-booking.page.scss'],
})
export class NewBookingPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private bookingSrvc: BookingsService
  ) { }

  ngOnInit() {
  }

  closeModal()
  {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  addNewBooking(f: NgForm)
  {
    this.bookingSrvc.insertBooking({
      'booking_name': f.value.bookingName,
      'topic': f.value.topic,
      'details': f.value.details,
      'booking_date': f.value.bookingDate,
      'start_hour': f.value.startHour,
      'end_hour': f.value.endHour,
      'creator': f.value.creator
    })
    .subscribe(() => {
      this.bookingSrvc.fetchBookings()
      .subscribe((bookings) => {
        console.log(bookings);
      });
      console.log("Booking inserted");
      this.closeModal();
    });
  }

}
