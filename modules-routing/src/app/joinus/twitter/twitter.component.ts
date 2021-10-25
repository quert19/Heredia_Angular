import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  check:string = "assets/images/checked.png";
  constructor() { }

  ngOnInit(): void {
  }

}
