import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telegram',
  templateUrl: './telegram.component.html',
  styleUrls: ['./telegram.component.css']
})
export class TelegramComponent implements OnInit {
  check:string = "assets/images/checked.png";
  constructor() { }

  ngOnInit(): void {
  }

}
