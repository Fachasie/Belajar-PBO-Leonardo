class Parent{
    constructor(greeting) {
        this.greeting = greeting
    }
    parentSay(){
        console.log(`${this.greeting} this is the parent class`)
    }
}

// class anak
class Child extends Parent{
    constructor(greeting, name){
        super(greeting)
        this.name = name
    }

    childSay(){
        console.log(`${this.greeting} , ${this.name} this is the child class`)
    }
}

// instantiate
let parent1 = new Parent("Pagi")
parent1.parentSay()

let child1 = new Child(`Hello`,`Anton`)
child1.childSay()
child1.parentSay()