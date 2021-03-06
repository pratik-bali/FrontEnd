import { Component, OnInit } from '@angular/core';
import { Principal } from '../../shared';
import { Router } from '@angular/router';
import { RiskService } from '../risk.service';
import { MedicalInsurance } from '../risk.model';

@Component({
  selector: 'jhi-medical-insurance',
  templateUrl: './medical-insurance.component.html'
})
export class MedicalInsuranceComponent implements OnInit {

    account: Account;
    medicalInsurance: MedicalInsurance = new MedicalInsurance();
    medicalArray = [];
    constructor(private principal: Principal,
      private router: Router,
      private riskService: RiskService) {}

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
        });
      }
      MedicalInsurance() {
        this.medicalArray.push({
          // id: this.id,
         hosp_type: this.medicalInsurance.hosp_type,
         room_type: this.medicalInsurance.room_type,
         family_members: this.medicalInsurance.family_members,
      });
      this.riskService.SaveMedicalInsurance(this.medicalInsurance)
     .subscribe( (data) => {
      alert ('Added new stocks details');
     });
  }
  }
