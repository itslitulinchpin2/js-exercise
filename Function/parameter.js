//매개변수의 정보는 함수 내부에서 접근 가능한 arguments 객체에 저장된다.

//매개변수 기본값 Default Parameters 세팅이 가능하다.
function add(a=1,b=1){
    console.log(a);
    console.log(b);
    console.log(arguments); //[Arguments] { '0': 1, '1': 2, '2': 3 }
    return a+b;
}

const result=add();
console.log(result)

const result2 = add(3,4)
console.log("디폴트 아닌 값: ", result2)

//Rest 매개변수 Rest Parameters
//얼마나 많은 인자가 전달될지 모를때
function sum(a,b,...numbers){   
    console.log(a); //1
    console.log(b); //2
    console.log(numbers); //[3,4,5]
}

sum(1,2,3,4,5)