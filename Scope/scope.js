//코드 블럭: {}, if( ){}, function(){} 등등

//블럭 외부에서는 내부의 변수를 참조 불가
{
    const a = 'a'
}
//console.log(a); //에러

const b = 'b';

//함수 외부에서는 함수 내부 변수 참조 불가능
function print(){
    const message = 'Hello World';
    console.log(message);
}
//console.log(message) 불가


