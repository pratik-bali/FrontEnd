export class Utility {
    electricity;
    gas;
    water;
    telephone;
    mobile;
    internet;
    tv;
    vcd;
    news;
    dynamicUtility: any = [];
}
export class Travel {
    food;
    entertainment;
    dineout;
    vacation;
    hobby;
    dynamicTravel: any = [];
}
export class Credit {
    issuer;
    limit;
    monthly_usage;
    monthly_pay;
    type;
    roi;
    balance;
    creditModelArray: any = [];
}
export class General {
    ins_obj;
    policy_name;
    premium;
    issuer;
    policy_term;
    start_date;
    sum;
    policy_no;
    proposer_name;
    generalModelArray: any = [];
}
export class Health {
    ins_name;
    policy_name;
    premium;
    policy_term;
    sum;
    policy_no;
    issuer;
    proposer_name;
    start_date;
    premium_mode;
    healthModelArray: any = [];
}
export class House {
    milk;
    fruit;
    rent;
    fuel;
    medical;
    society;
    auto;
    edu;
    grocery;
    servent;
    laundry;
    vcd;
    selfcare;
    property;
    dynamicHousehold: any = [];
}
export class Income {
    incomeSalary: 0;
    incomeAward: 0;
    incomeBonus: 0;
    incomePension: 0;
    incomeSaving: 0;
    incomeDeposit: 0;
    incomeRental: 0;
    dynamicIncome: any = [];
    constructor() {

    }
}
export class Life {
    type;
    issuer;
    ins_name;
    proposer_name;
    start_date;
    policy_term;
    premium_mode;
    policy_name;
    sum;
    premium;
    premium_term;
    lifeModelArray: any = [];

    constructor() { }
}
export class Loan {

    loan_type;
    lender;
    applicant: '';
    amnt;
    ldate: '';
    check: '';
    tenure;
    intrest_type: '';
    roi;
    rdate: '';
    loanModelArray: any = [];
    constructor() { }
}
export class Misc {
    shoes;
    pet;
    electronics;
    furniture;
    charity;
    gift;
    cloth;
    dynamicMisc: any = [];
}
