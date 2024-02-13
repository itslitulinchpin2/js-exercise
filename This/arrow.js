//JS의 함수는 만능 슈퍼맨
//함수처럼 사용, 생성자 함수로 사용 (클래스)
//하지만, 이걸 위해서 불필요한 무거운 프로토타입 객체가 생성됨

const dog = {
    name:'Dog',
    play: function(){
        console.log('놀자 멍멍!');
    }
};

dog.play();
const obj = new dog.play();
console.log(obj); // play {}..기대한 값이 아니야

//ES6
const cat = {
    name:'cat',
    play(){ //객체 메서드(옵젝트에 속한 함수)
        console.log('놀자 냐옹');
    }
}

cat.play();
//단, 생성자 함수로는 사용할 수 없음.

// 화살표 함수의 특징
//1. 문법이 깔끔
//2. 생성자 함수로 사용이 불가능(무거운 프로토타입을 만들지 않음)
//3. 함수 자체 arguments
//4. this에 대한 바인딩이 정적으로 결정됨
//  함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨

const add = (a,b) =>{
    console.log(arguments); //arrow 함수 외부의 arguments를 참조만 함

};

add(1,2);

const printArrow = ()=>{
    console.log(this);
}
printArrow();
cat.printArrow=printArrow;
cat.printArrow(); //얘도 그냥 {}임, 화살표함수는 이미 바인딩됨