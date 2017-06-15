class Person{
    constructor(name){
        this.born = new Date();
        this.name = name;
        console.log(`I am ${this.name},I am born at ${this.born}`)
    }
    say(){
        console.log(`My name is ${this.name}, I am a ${this.gender}, I an born at ${this.born}`);
    }
}

class Man extends Person{
    constructor(name){
        super(name);
        this.gender = 'man';
    }
}

class Woman extends Person {
    constructor(name) {
        super(name);
        this.gender = 'woman';
    }
}

var man = new Man('jack');
man.say();

var woman = new Woman('rose');
woman.say();