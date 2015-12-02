class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get getName() {
        return this.name;
    }
      
    get getAge() {
        return this.age;
    }
  
    set setName(newName) {
        this.name = newName;
    }
  
    set setAge(newAge) {
        this.age = newAge;
    }
    
    toString(){
        return this.name + " is " + this.age
    }
}