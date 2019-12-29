import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  public data = [
    {
      "id": "P1",
      "name": "Bere"
    },
    {
      "id": "P2",
      "name": "Mici"
    },
    {
      "id": "P3",
      "name": "Paine"
    },

  ];

    constructor(
      private http: HttpClient
    ) { }

  ngOnInit() {
  }

  testSave() {
    const blob = new Blob( [JSON.stringify(this.data)], {type: "application/octet-stream"} );
    saveAs( blob, 'smartphone.json');
  }

  getSmartphone(): void {
    this.http.get('assets/smartphone.json').subscribe((data) => {
      console.log(data);
    })
  }
}
