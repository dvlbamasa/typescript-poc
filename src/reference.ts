//Enum
const enum Size {Small = 0, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize);
//Functions
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(10_000);

//Object
let employee: Employee = {id: 1, name: 'test', retire: (date: Date) => {
    console.log(date);
}};

//Type Alias
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

// Union Type
function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === "number") {
        return weight* 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

//Intersection

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UiWidget = Draggable & Resizable;

let textBox: UiWidget = {
    drag: () => {},
    resize: () => {}
}

//Literal Types
type Quantity = 50 | 100;
type Metrics = "cm" | "in";
let quantity: Quantity = 100;

//Nullable Types
function greet(name: string | null) {
    if (name) {
        console.log(name.toLowerCase);
    } else {
        console.log("AAAAAAA");
    }
}

//Optional Chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id:number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0);
//Optional property access operator
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
//customer?.[0]

//Interface
interface Person {
    first: string,
    last: string,
    [key: string]: any
}

const person: Person = {
    first: 'test',
    last: 'tets',
    test: 'test',
    test2: 'test'
}