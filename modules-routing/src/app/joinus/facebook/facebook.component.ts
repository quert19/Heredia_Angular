import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
  check:string = "assets/images/checked.png";
  constructor() { }

  ngOnInit(): void {
  }

}
