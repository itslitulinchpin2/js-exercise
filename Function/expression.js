//함수 선언문 function name() {}
//함수 표현식 const name = function(){}
//화살표 함수 const name = () => {}

//아래의 function은 무명함수. 함수는 값이 될 수 있다!
let add = function (a,b){
    return a+b;
}

console.log(add(1,2))

add = (a,b) =>{return a+b;}
add = (a,b) => a+b;

console.log(add(1,2))

//생성자 함수 const object = new Function(); //객체에서 다룸

