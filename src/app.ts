//// Here's the Validation interface ~
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable){
   let isValid = true;
   if (validatableInput.required){
        isValid = isValid && validatableInput.value.trim().length
   }
}

//// Here's the Autobind decorator ~
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFunct = originalMethod.bind(this);
      return boundFunct;
    },
  };
  return adjDescriptor;
}

//// Here's the Project input class ~
class PorjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  tittleInputElement: HTMLInputElement;
  descrptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.tittleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descrptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private gatherInput(): [string, string, number] | void {
    const enteredTitle = this.tittleInputElement.value;
    const enteredDescription = this.descrptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;
    console.log(this.peopleInputElement.value);
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredPeople.trim().length === 0
    ) {
      alert("No");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.tittleInputElement.value = "";
    this.descrptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherInput();
    if (Array.isArray(userInput)) {
      const [tittle, desc, people] = userInput;
      console.log(tittle, desc, people);
      this.clearInputs();
    }
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const newPrj = new PorjectInput();
// const newPrj2 = new PorjectInput();
