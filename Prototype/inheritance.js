//프로토타입 베이스 객체지향프로그래밍

function Animal(name,age){
    this.name=name;
    this.age=age;
}

Animal.prototype.printName = function () {
    console.log(`${this.name} is this dog's name`);
}

function Dog(name,age,owner){
    //Dog의 프로토타입을 Object에서 Animal로 변경
    Dog.prototype=Object.create(Animal.prototype);

    //super(name,age)와 같은 기능
    Animal.call(this,name,age);
    this.owner=owner;
}

Dog.prototype.play = () => {
    console.log('놀자!')
}

const dog1 = new Dog('kove',10,'lee');
dog1.play();
dog1.printName();