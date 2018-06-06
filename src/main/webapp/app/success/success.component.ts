import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-success',
  templateUrl: './success.component.html',
  styles: []
})
export class SuccessComponent implements OnInit {

  @Input() payDetail;
  constructor() { }

  ngOnInit() {
  }

}
