//this binding
//자바, C#, C++ 대부분의 객체지향 언어에서는
//this는 항상 자신의 인스턴스 자체를 가리킴!
//하지만 JS에서는 누가 호출하느냐에 따라서 this가 달라짐.
//즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨.

function Cat(name){
    this.name=name;
    this.printName=function(){
        console.log(`고양이의 이름을 출력한 다음: ${this.name}`);
    };
}

function Dog(name){
    this.name=name;
    this.printName=function(){
        console.log(`강아지의 이름을 출력한 다음: ${this.name}`);
    };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍');

cat.printName();
dog.printName();

dog.printName=cat.printName;
dog.printName(); //고양이 멍! 이 출력됨!! 충격적
//caller가 dog이기 때문!

function printOnMonitor(printName){
    console.log('콜백 실행');
    printName();
}

printOnMonitor(cat.printName) //이름이 undefined가 나옴!
//콜러가 없기 때문이다.
//JS에서는 this가 영원히 정적으로 바인딩 되지 않고, 동적바인딩.
