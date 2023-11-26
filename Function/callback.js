const add=(a,b)=>a+b;
const multiply=(a,b)=>a*b;

//전달된 action은 콜백함수이다.
//전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
//함수를 가리키고 있는 함수의 참조값이 전달된다.
//그래서 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨.
//즉, 콜백함수는 필요한 순간에 호출한다!
function calculator(a,b,action){
    let result = action(a,b); //여기서 action이 호출된다.
    console.log(result);
    return result;
}

calculator(1,2,add);
calculator(3,4,multiply);