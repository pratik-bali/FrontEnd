import { Component, OnInit } from '@angular/core';
import { Principal } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-risk',
  templateUrl: './risk.component.html'
})
export class RiskComponent implements OnInit {

    account: Account;

    constructor(private principal: Principal,
      private router: Router) {}

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
        });
      }
     gotoLife() {
         this.router.navigate(['life']);
     }
     gotoMedical() {
        this.router.navigate(['medical']);
    }
}
