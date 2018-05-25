import { Component, OnInit } from '@angular/core';
import { NAMED_ENTITIES } from '@angular/compiler';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

import { Income } from './services/income.model';
import { IncomeService } from './services/income.service';

import { Utility } from './services/utility.model';
import { UtilityService } from './services/utility.service';

import { House } from './services/house.model';
import { HouseService } from './services/house.service';

import { Travel } from './services/travel.model';
import { TravelService } from './services/travel.service';

import { Misc } from './services/misc.model';
import { MiscService } from './services/misc.service';

import { Loan } from './services/loan.model';
import { LoanService } from './services/loan.service';

import { Life } from './services/life.model';
import { LifeService } from './services/life.service';

import { Health } from './services/health.model';
import { HealthService } from './services/health.service';

import { General } from './services/general.model';
import { GeneralService } from './services/general.service';

import { Credit } from './services/credit.model';
import { CreditService } from './services/credit.service';

@Component({
  selector: 'jhi-spending',
  templateUrl: './spending.component.html',
  styles: ['./spending.component.css']
})
export class SpendingComponent implements OnInit {
  resource = ''; amount; expense; demoarr;

// Utility
// household
// loan and debts home,personal,auto,education,property,gold,hand
// insurance payment
// credit cards
// entertainment and travel
// miscellaneous

  dynamicLoanArray: any = [];
  dynamicIncome = [];
  dynamicUtilityArray: any = [];
  dynamicHousehold: any = [];
  dynamicTravel: any = [];
  dynamicMisc: any = [];
  dynamicLifeArray: any = [];
  dynamicHealth: any = [];
  dynamicGeneral: any = [];
  dynamicCredit: any = [];

  LoanTypeArray = [
    {name: 'Home Loan'},
    {name: 'Personal Loan'},
    {name: 'Auto Loan'},
    {name: 'Educational Loan'},
    {name: 'Property Loan'},
    {name: 'Gold Loan'},
    {name: 'Hand Loan'}
  ];
  InterestTypeArray = [
    {name: 'Fixed'},
    {name: 'Floating'},
    {name: 'Fixed-Floating'}
  ];
  PolicyTypeArray = [
    {name: 'Child Policy'},
    {name: 'Retirement Policy'},
    {name: 'Saving Policy'},
    {name: 'Investment Policy'},
    {name: 'Term Policy'}
  ];
  PremiumTypeArray = [
    {name: 'Single'},
    {name: 'Monthly'},
    {name: 'Quarterly'},
    {name: 'Half Yearly'},
    {name: 'Yearly'}
  ];
  CardTypeArray = [
    {name: 'Gold'},
    {name: 'Platinum'},
    {name: 'Silver'},
    {name: 'Titanium '}
  ];

  // object creation
  income: Income = new Income();
  utility: Utility = new Utility();
  house: House = new House();
  loan: Loan = new Loan();
  travel: Travel = new Travel();
  misc: Misc = new Misc();
  life: Life = new Life();
  health: Health = new Health();
  general: General = new General();
  credit: Credit = new Credit();

  constructor(
    private incomeService: IncomeService,
    private utilityService: UtilityService,
    private houseService: HouseService,
    private travelService: TravelService,
    private miscService: MiscService,
    private loanService: LoanService,
    private lifeService: LifeService,
    private healthService: HealthService,
    private generalService: GeneralService,
    private creditService: CreditService
    ) { }

  ngOnInit() {
    // for income
    this.income.incomeSalary = 0;
    this.income.incomeAward = 0;
    this.income.incomeBonus = 0;
    this.income.incomeDeposit = 0;
    this.income.incomePension = 0;
    this.income.incomeRental = 0;
    this.income.incomeSaving = 0;

    // for utility
    this.utility.electricity = 0;
    this.utility.gas = 0;
    this.utility.internet = 0;
    this.utility.mobile = 0;
    this.utility.news = 0;
    this.utility.telephone = 0;
    this.utility.tv = 0;
    this.utility.vcd = 0;
    this.utility.water = 0;

    // household
    this.house.milk = 0;
    this.house.fruit = 0;
    this.house.rent = 0;
    this.house.fuel = 0;
    this.house.medical = 0;
    this.house.society = 0;
    this.house.auto = 0;
    this.house.edu = 0;
    this.house.grocery = 0;
    this.house.servent = 0;
    this.house.laundry = 0;
    this.house.vcd = 0;
    this.house.selfcare = 0;
    this.house.property = 0;

    // travel
    this.travel.food = 0;
    this.travel.entertainment = 0;
    this.travel.dineout = 0;
    this.travel.vacation = 0;
    this.travel.hobby = 0;

    // misc
    this.misc.shoes = 0;
    this.misc.pet = 0;
    this.misc.electronics = 0;
    this.misc.furniture = 0;
    this.misc.charity = 0;
    this.misc.gift = 0;
    this.misc.cloth = 0;
  }

  // income
  addFieldValue() {
      this.dynamicIncome.push({
        name: this.resource,
        value: this.amount
      });
      this.income.IncomeArray.push({
        name: this.resource,
        value: this.amount
      });
  }
  deleteFieldValue(index) {
      this.dynamicIncome.splice(index, 1);
      this.income.IncomeArray.splice(index, 1);
      console.log('deleted' + index);
  }
  onIncomeSave(): void {
    this.incomeService.ServiceIncome(this.income)
     .subscribe((data) => {
       alert('success');
    });
  }

  // utility
  AddUtility() {
    this.dynamicUtilityArray.push({
      name: this.resource,
      value: this.expense
    });
  }
  RemoveUtility(index) {
    this.dynamicUtilityArray.splice(index, 1);
    this.utility.UtilityArray.splice(index, 1);
  }
  SaveUtility(): void {
    this.utility.UtilityArray.push({
      name: this.resource,
      value: this.expense
    });
    this.utilityService.ServiceUtility(this.utility)
    .subscribe((data) => {
      alert('success');
   });
  }

  // household
  AddHousehold() {
    this.dynamicHousehold.push({
      name: this.resource,
      value: this.expense
    });
  }
  RemoveHousehold(index) {
    this.dynamicHousehold.splice(index, 1);
  }
  SaveHousehold(): void {
    this.houseService.ServiceHouse(this.house)
     .subscribe((data) => {
       alert('success');
    });
  }

  // loan
  AddLoan() {
    this.dynamicLoanArray.push({
      ltype: this.loan.loan_type,
      lender: this.loan.lender,
      app: this.loan.applicant,
      amnt: this.loan.amnt,
      ldate: this.loan.ldate,
      check: this.loan.check,
      tenure: this.loan.tenure,
      itype: this.loan.intrest_type,
      roi:  this.loan.roi,
      rdate: this.loan.rdate
    });

    console.log('AddLoan() call success');
    console.log(this.loan.loan_type);
  }
  RemoveLoan(index) {
    this.dynamicLoanArray.splice(index, 1);
  }
  onLoanSave(): void {
    this.loanService.ServiceLoan(this.loan)
     .subscribe((data) => {
       alert('success');
    });
  }

  // life insurance
  AddLifeInsurance() {
    this.dynamicLifeArray.push({
      iName: this.life.type,
      pName: this.life.policy_name,
      premium: this.life.premium,
      term: this.life.premium_term,
      pterm: this.life.policy_term,
      sum: this.life.sum
    });

    console.log('AddLife() call success');

  }
  RemoveLifeInsurance(index) {
    this.dynamicLifeArray.splice(index, 1);
  }
  onLifeSave(): void {
    this.lifeService.ServiceLife(this.life)
     .subscribe((data) => {
       alert('success');
    });
    console.log('in life save');
  }

  // health insurance
  AddHealth() {
    console.log('Addhealth() call ');

    this.dynamicHealth.push({
      iName: this.health.ins_name,
      pName: this.health.policy_name,
      premium: this.health.premium,
      pterm: this.health.policy_term,
      sum: this.health.sum
    });

    console.log('Addhealth() call success');

  }
  RemoveHealth(index) {
    this.dynamicHealth.splice(index, 1);
  }
  onHealthSave(): void {
    this.healthService.ServiceHealth(this.health)
     .subscribe((data) => {
       alert('success');
    });
    console.log('in health save');
  }

  // general insurance
  AddGeneral() {
    this.dynamicGeneral.push({
      iName: this.general.ins_obj,
      pName: this.general.policy_name,
      premium: this.general.premium,
      issuer: this.general.issuer,
      pterm: this.general.policy_term,
      pdate: this.general.start_date,
      sum: this.general.sum
    });

    console.log('AddGeneral() call success');
  }
  RemoveGeneral(index) {
    this.dynamicGeneral.splice(index, 1);
  }
  onGeneralSave(): void {
    this.generalService.ServiceGeneral(this.general)
     .subscribe((data) => {
       alert('success');
    });
    console.log('in general save');
  }

  // credit insurance
  AddCredit() {
      this.dynamicCredit.push({
          type: this.credit.type,
          bank: this.credit.issuer,
          roi: this.credit.roi,
          balance: this.credit.balance
        });

  console.log('AddGeneral() call success');
  }
  RemoveCredit(index) {
  this.dynamicCredit.splice(index, 1);
  }
  onCreditSave(): void {
      this.creditService.ServiceCredit(this.credit)
      .subscribe((data) => {
        alert('success');
  });
  console.log('in credit save');
  }

  // travel
  AddTravel() {
    this.dynamicTravel.push({
      name: this.resource,
      value: this.expense
    });
  }
  RemoveTravel(index) {
    this.dynamicTravel.splice(index, 1);
  }
  SaveTravel(): void {
    this.travelService.ServiceTravel(this.travel)
     .subscribe((data) => {
       alert('success');
    });
  }

  // misc
  AddMisc() {
    this.dynamicMisc.push({
      name: this.resource,
      value: this.expense
    });
  }
  RemoveMisc(index) {
    this.dynamicMisc.splice(index, 1);
  }
  SaveMisc(): void {
    this.miscService.ServiceMisc(this.misc)
     .subscribe((data) => {
       alert('success');
    });
  }
}
