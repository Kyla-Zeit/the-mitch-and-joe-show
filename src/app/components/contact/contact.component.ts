import { Component } from '@angular/core';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you! We will get back to you soon.');
    this.formData = {
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      message: ''
    };
  }
}
