import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joinpage',
  templateUrl: './joinpage.component.html',
  styleUrls: ['./joinpage.component.css']
})
export class JoinpageComponent implements OnInit {

  fb:string = "assets/images/facebook.png";
  tg:string = "assets/images/telegram.png";
  tw:string = "assets/images/twitter.png";
  constructor() { }

  ngOnInit(): void {
  }

}
