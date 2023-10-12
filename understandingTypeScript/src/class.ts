abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];
  
  constructor(protected readonly id: string, public name: string) {}
  
  abstract describe(this: Department):void ;

  static createEmployee(name: string) {
    return { name: name };
  }


  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
      console.log('IT Department - ID' + this.id)
  }
}

class AccountDepartment extends Department {
  private lastReport: string;

  //add more complex logic

  public get mostRecetReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No reports");
  }

  public set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(this.name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  describe() {
    console.log('Account Department - ID' + this.id)
    }

  printReports() {
    console.log(this.reports);
    console.log(this.lastReport);
  }
}

const employee1 = Department.createEmployee("Maxi");
console.log(employee1,Department.fiscalYear);


const it = new ITDepartment("1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");

//const accounting = new AccountDepartment("2", []);

// console.log(it);
// console.log(accounting);

// // accounting.addReport("Something it's in the air...");
// accounting.mostRecentReport = "";
// console.log(accounting.mostRecetReport);
// const accounting = new Department("1", "Accounting");
// accounting.addEmployee("Manu");
// accounting.addEmployee("Mnu");

// accounting.describe();
// accounting.printEmployeeInformation();

// const accountCopy = {
//   name: "s",
//   describe: accounting.describe,
// };
// accountCopy.describe();
