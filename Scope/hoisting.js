
//함수의 호이스팅은 함수의 선언문 이전에 호출이 가능하게 해줌
//함수의 선언문은 선언 이전에도 호출이 가능함

print(); //여기서 실행해도 작동됨, 호이스팅 덕분.

function print(){
    console.log('Hello');
}
//변수(let,const)와 클래스는 선언만 호이스팅이 되고, 초기화는 안됨
//초기화 전 변수에 접근하면 컴파일 에러가 발생


//console.log(hi); //hi가 선언은 돼었으나 초기화가 되지 않았다는 에러가 나옴
let hi = 'hi';

let x = 1;
{
    console.log(x);
    //let x = 2; // 여기서도 초기화 에러 발생, 
    //블럭 안이기 때문에 호이스팅되어 선언만 된 것으로 취급
}