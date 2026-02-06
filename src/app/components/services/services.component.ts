import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Club Performances',
      description: 'Energize your venue with live classic rock that keeps the crowd entertained all night long.',
      features: ['Full sound setup', '2-4 hour sets', 'Custom setlists']
    },
    {
      title: 'Private Parties',
      description: 'Make your celebration unforgettable with live music tailored to your event.',
      features: ['Birthday parties', 'Anniversaries', 'Holiday events']
    },
    {
      title: 'Special Events',
      description: 'Corporate events, fundraisers, and community gatherings deserve premium entertainment.',
      features: ['Corporate functions', 'Charity events', 'Festival performances']
    },
    {
      title: 'Full Band Option',
      description: 'Need bigger sound? The Mitch & Joe Band delivers as a 4 or 5 piece ensemble.',
      features: ['Bass & drums', 'Bigger venues', 'Festival ready']
    }
  ];
}
