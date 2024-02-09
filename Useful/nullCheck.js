// nullish Coalescing Operator

//null과 undefined인 경우에만 사용하고 싶은 경우

let num = 0;

//0은 falsy이므로 예상치 못한 결과가 나옴.
console.log(num|| '-1');

//??를 쓰자. null과 undefined인 경우만 확인
console.log(num ?? '1');