//배열을 추가하는 나쁜 방식
let array=[1,2,3,4];
array[4]=5;
console.log(array);

//삭제하는 나쁜 방식
delete array[0];
console.log(array);

//나쁜 이유 : 배열의 해당 인덱스에 빈 공간이 남아있게 됨.