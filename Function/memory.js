function add(a,b){
    return a+b;
}

const sum = add; //sum도 add와 동일한 메모리주소

//sum으로 add함수 대신 사용할 수 있다!
console.log(sum(1,2));

