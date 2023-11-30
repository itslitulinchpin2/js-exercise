//배열 생성 방법
let array = new Array(2); //2칸짜리 비어있는 배열
console.log(array);

array = new Array(1,2,3);
console.log(array);//[1,2,3]

array = Array.of(1,2,3,4,5)
console.log(array)

array = [4,5,6,7]
console.log(array);

array =Array.from('text');
console.log(array)

//일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어짐.
//하지만 JS에서 배열은 연속적으로 이어져있지 않고, 옵젝트와 유사.
//Js의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다.
//이를 보와한기 위해 타입이 정해져 있는 타입 배열이 있음.


//아래 코드는 쟈바스크립트에서 배열이 객체와 매우 유사함을 보여줌
array = Array.from({
    0: '안',
    1: '녕',
    length:2,
});

console.log(array);