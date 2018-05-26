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
}
export class General {
    policy_no;
    issuer;
    policy_name;
    start_date;
    premium;
    proposer_name;
    ins_obj;
    policy_term;
    sum;
}
export class Health {
    policy_no;
    issuer;
    policy_name;
    proposer_name;
    policy_term;
    start_date;
    premium_mode;
    ins_name;
    sum;
    premium;
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
