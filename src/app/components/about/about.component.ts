import { Component } from '@angular/core';

interface BandMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface Feature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  bandMembers: BandMember[] = [
    {
      name: 'Mitch Haq',
      role: 'Piano & Vocals',
      image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=400',
      description: 'Master pianist bringing classic rock to life with soulful performances.'
    },
    {
      name: 'Joe Pickford',
      role: '12-String Guitar & Vocals',
      image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=400',
      description: 'Seasoned guitarist with a passion for timeless rock anthems.'
    }
  ];

  features: Feature[] = [
    {
      title: 'Duo Act',
      description: 'Intimate performances perfect for any venue size with piano and 12-string guitar.'
    },
    {
      title: 'Classic Rock',
      description: 'Timeless hits from the greatest rock era, performed with authentic passion.'
    },
    {
      title: 'Full Band Available',
      description: 'Also available as The Mitch & Joe Band - a 4 or 5 piece ensemble for larger events.'
    }
  ];
}
