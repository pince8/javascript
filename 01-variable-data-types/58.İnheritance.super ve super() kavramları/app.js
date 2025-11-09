//super kavramı
//super() metodu kullanımı

class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo() {
        console.log(this.firstName, this.lastName, this.salary);
    }
}

class Student extends Person {
    constructor(firstName, surname, salary) {
        super(firstName, surname, salary);
    }

    writeInfo() {
        super.writeInfo();
    }
}

const student1 = new Student("Ali", "Bayram", 1239);
student1.writeInfo();