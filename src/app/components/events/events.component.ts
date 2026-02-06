import { Component } from '@angular/core';

interface EventItem {
  date: string;
  title: string;
  venue: string;
  location: string;
  time: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events: EventItem[] = [
    {
      date: 'Feb 14',
      title: "Valentine's Special",
      venue: 'The Blue Note Lounge',
      location: 'Toronto, ON',
      time: '8:00 PM'
    },
    {
      date: 'Feb 28',
      title: 'Saturday Night Live',
      venue: 'Rockers Bar & Grill',
      location: 'Mississauga, ON',
      time: '9:00 PM'
    },
    {
      date: 'Mar 15',
      title: 'Charity Fundraiser',
      venue: 'Community Center',
      location: 'Brampton, ON',
      time: '7:30 PM'
    },
    {
      date: 'Mar 22',
      title: 'Full Band Show',
      venue: 'The Classic Rock Cafe',
      location: 'Hamilton, ON',
      time: '8:00 PM'
    }
  ];

  scrollToContact(event: MouseEvent) {
    event.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
