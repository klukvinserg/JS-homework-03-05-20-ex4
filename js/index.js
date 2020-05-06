class Employee {
  constructor(id, name, surname, position, salary) {
    this._id = id;
    this._name = name;
    this._surname = surname;
    this._position = position;
    this._salary = salary;
  }
}

let userOne = new Employee(1, "Serg", "Klukvin", "director", 100);
let userTwo = new Employee(2, "Vasyl", "Bordo", "manager", 50);
let userThree = new Employee(3, "Mary", "Mimino", "driver", 55);
let userFour = new Employee(4, "Lily", "Leonov", "driver", 20);
let userFive = new Employee(5, "Oksa", "Nord", "developer", 60);
let userSix = new Employee(6, "Andy", "Dukers", "manager", 20);
let userSeven = new Employee(7, "Kolya", "Pitt", "manager", 10);

let arrEmployee = [
  userOne,
  userTwo,
  userThree,
  userFour,
  userFive,
  userSix,
  userSeven,
];

class EmpTable {
  constructor(el) {
    this._el = el;
  }

  getHtml() {
    let htmlCode = "";
    for (let i = 0; i < this._el.length; i++) {
      htmlCode += `<tr><td>${this._el[i]._id}</td><td>${this._el[i]._name}</td><td>${this._el[i]._surname}</td><td>${this._el[i]._position}</td><td>${this._el[i]._salary}</td></tr>`;
    }
    return `<table><tr>
      <th>ID</th>
      <th>Name</th>
      <th>Surname</th>
      <th>Position</th>
      <th>Salary</th>
      </tr>${htmlCode}</table>`;
  }
}

class StyledEmpTable extends EmpTable {
  constructor(el, objStyle) {
    super(el);
    this._objStyle = objStyle;
  }

  getStyles() {
    let styleCode = "";
    for (let key in this._objStyle) {
      styleCode += this._objStyle[key];
    }
    return `<style>${styleCode}</style>`;
  }

  getHtml() {
    let htmlCode = "";
    for (let i = 0; i < this._el.length; i++) {
      htmlCode += `<tr><td>${this._el[i]._id}</td><td>${this._el[i]._name}</td><td>${this._el[i]._surname}</td><td>${this._el[i]._position}</td><td>${this._el[i]._salary}</td></tr>`;
    }

    return `${this.getStyles()}
        <table><tr>
        <th>ID</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Position</th>
        <th>Salary</th>
        </tr>${htmlCode}</table>`;
  }
}

objStyle = {
  table: "table {background: #dc0; border: 5px double #000;}",
  tdTh: "td, th {padding: 5px; border: 1px solid #fff;}",
};

let arrTwo = new StyledEmpTable(arrEmployee, objStyle);

document.write(arrTwo.getHtml());
