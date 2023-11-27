class Animal{
    constructor(color){
        this.color=color;
    }
    eat(){
        console.log('eat');
    }
    sleep(){
        console.log('sleep')
    }
}

class Dog extends Animal{
    constructor(color,ownerName){
        super(color); //부모 클래스 생성자 그대로 상속
        this.ownerName=ownerName;
    }

    //오버라이딩
    eat(){
        super.eat(); //부모의 것 그대로 상속 가능
        console.log("dog is eatiing") //추가도 가능
    }
   
    play(){
        console.log('play');
    }
}

const kobe = new Dog('black','Gabi');

console.log(kobe.color)
console.log(kobe.ownerName);
kobe.eat();