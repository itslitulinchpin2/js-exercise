
function Dog(name,age){
    this.name=name;
    this.age=age;
    
    //인스턴스 레벨의 함수
    // this.printName=()=>{
    //     console.log(`${this.name} is this dog's name` )
    // }
}

const dog1 = new Dog('kobe',10);
const dog2 = new Dog('koko', 5);

console.log(dog1);


//프로토타입 레벨 함수 만들기
Dog.prototype.printName = function(){
    console.log(`${this.name} is this dog's name` )
}
dog2.printName();

//인스턴스 레벨이 아닌 프로토타입 레벨 함수를 쓰면
//메모리 절약이 가능하다.
//오버라이딩도 당연히 가능하다.