function a(){
    return 1;
}

function b(){
    return a()+1;
}

function c(){
    return b()+1;
}

const result=c();
console.log(result);

//함수 호출 순서 : c b a
//콜스택에 c b a 순서로 쌓임.