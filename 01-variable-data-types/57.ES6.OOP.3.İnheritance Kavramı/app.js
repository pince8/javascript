//!İnheritance (Miras Alma) Kavramı

class Person {

    firstName = "Enes";
    write() {
        console.log("Person Write: ", this.firstName);
    }
}

class Student extends Person {
    write() {
        console.log("Student Write ", this.firstName);
        //this dediğimizde bu sınıfı kastediyoruz
        //super dediğimizde miras aldığımız sınıfı temsil ediyoruz
        super.write();
    }
}
const student1 = new Student();
student1.write();