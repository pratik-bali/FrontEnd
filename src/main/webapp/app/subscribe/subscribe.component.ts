import { Component, OnInit } from '@angular/core';
import { Router,Route } from '@angular/router';

@Component({
  selector: 'jhi-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor( private router:Router)  { }

  ngOnInit() {
  }
  pay(){
    this.router.navigate(['subscriber']);
  }

}
