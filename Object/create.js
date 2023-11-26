/*
const apple={
    name:'apple',
    display: function(){
        //객체 안에서 자신의 프로퍼티를 접근할 때에는, this를 쓴다.
        console.log(`${this.name} is my fruit.`)
    }
}
const orange={
    name:'orange',
    display: function(){
        //객체 안에서 자신의 프로퍼티를 접근할 때에는, this를 쓴다.
        console.log(`${this.name} is my fruit.`)
    }
}
*/

//객체를 쉽게 만드는 방법
//생성자 함수 : 대문자로 시작
function Fruit(name){
    this.name=name;
    this.display= function(){
        //객체 안에서 자신의 프로퍼티를 접근할 때에는, this를 쓴다.
        console.log(`${this.name} is my fruit.`)
    }
    return this; //생략가능
}

const apple = new Fruit('apple');

console.log(apple);
apple.display();