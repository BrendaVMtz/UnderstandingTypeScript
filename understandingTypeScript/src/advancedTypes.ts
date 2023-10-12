interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

//interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["Create-server"],
  startDate: new Date(),
};




type Combinable = string | number;
type Numeric = boolean | number;

type Universal = Combinable & Numeric;


function add(a: number, b: number): number;
function add(a: string, b: string): string;
//inserte las demas combinaciones ae 
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add ('Max', 'Swat') as string;
result.split(' ');
///////////////

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  // job:{
  //   title: 'CEO'
  // }
};

  
  // console.log(fetchedUserData?.job?.title);







///////////////////////////

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);
//Employee not admin
printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  if ('flyingSpeed'in animal) {
    console.log('Moving with speed> '+ animal.flyingSpeed)
  }
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// const userInput = <HTMLInputElement> document.getElementById('message-output')!;
const userInput = <HTMLInputElement> document.getElementById('message-output')! as HTMLInputElement;

userInput.value = 'HI';


interface errorContainer {
  [prop: string]: string;
}