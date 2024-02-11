// 오브젝트는 단 하나의 프로토타입을 가리킬 수 있다.
//(부모는 하나)
//하지만, 여러개 함수를 상속하고 싶다면?
//Mixin

const play = {
    play: function(){
        console.log(`${this.name} 놀자!`)
    }
}

const sleep = {
    sleep: function(){
        console.log(`${this.name} 자자!`)
    }
}

function Dog(name){
    this.name=name;
}

Object.assign(Dog.prototype,play,sleep)
const dog = new Dog('멍멍!');
console.log(dog);
dog.play();
dog.sleep();