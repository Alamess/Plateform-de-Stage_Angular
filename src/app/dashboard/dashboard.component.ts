import { Component } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  icons = [
    { viewBox: "0 0 54 33", path: "M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" }
  ];

  navButtons = [
    { class: 'text-blue-500', svgViewBox: '0 0 24 24', svgPath: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10z' },
    { class: 'bg-blue-100 text-blue-500', svgViewBox: '0 0 24 24', svgPath: 'M2 7h20v14H2z M16 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16' },
  ];

  topButtons = [
    { label: 'Deposit' },
    { label: 'Withdraw' },
  ];

  users = [
    { name: 'Kathryn Murphy', image: 'https://example.com/image.jpg', department: 'Design', salary: 1902 },
    { name: 'Mert Cukuren', image: 'https://example.com/image.jpg', department: 'Sales', salary: 2794 },
  ];

  tabs = [
    { name: 'Activities', active: true },
    { name: 'Transfer', active: false },
  ];

  activities = [
    { fields: [{ type: 'text', value: 'Card' }, { type: 'icon', iconViewBox: '0 0 24 24', iconPath: '...' }, { type: 'date', value: new Date() }] },
  ];
  headers = ['Type', 'Where', 'Description', 'Amount', 'Date'];

  constructor() { }
}
