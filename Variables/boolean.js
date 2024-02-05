//활용
let isFree=true;
let isActivated=false;
let isEnrolled = true;

//Boolean의 Falsy, Truthy
//!!를 붙이면 불리언 값으로 변환시켜준다.

//falsy한 값들
console.log(!!0); 
console.log(!!-0);
console.log(!!undefined);
console.log(!!null);
console.log(!!'')  
console.log(!!NaN);

//truthy한 값들
console.log(!!{}) //빈 객체는 특이하게도 true한 값이다.
console.log(!![])
console.log(!!2);
console.log("이 값은?")
console.log(!!-1);
