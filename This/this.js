// 글로벌 컨텍스트의 this
// 브라우저 : 윈도우. (this와 globalThis가 모두 window)
// 노드 : 모듈을 가리킨다.

console.log(this); //{}
console.log(globalThis) //전역객체
//globalThis.setTimeout();
//setTimeout();과 동일

console.clear();

//함수에서의 this
//엄격모드에서는 undefined, 아닐때는 글로벌 객체
function fun(){
    console.log(this); //글로벌객체

    //단, 엄격 모드에서는 undefined
}

//생성자 함수 또는 클래스에서의 this
//앞으로 생성될 인스턴스 자체를 가리킴

function Cat(name){
    this.name=name;
    this.printName=function(){
        console.log(this.name);
    };
}

const cat1 = new Cat('냥2');
cat1.printName();


