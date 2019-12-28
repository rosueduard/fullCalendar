import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from "@fullcalendar/daygrid";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // references the #calendar in the template
  @ViewChild('calendar',  {static: false}) calendarComponent: FullCalendarComponent;
  calendarPlugins = [dayGridPlugin]; // important!

  calendarEvents = [
    { title: 'event 1', date: '2019-12-01' },
    { title: 'Barosanealaaa', date: '2019-12-15' },
  ];

}
