import { Component, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // references the #calendar in the template
  @ViewChild('calendar',  {static: false}) calendarComponent: FullCalendarComponent;
  calendarPlugins = [dayGridPlugin]; // important!

  calendarEvents = [
    { title: 'event 1', date: '2019-12-01' },
    { title: 'Barosanealaaa', date: '2019-12-15' },
  ];

}
