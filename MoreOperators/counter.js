//count는 전역으로 선언됨. html에서 함께 쓰므로 main.js에서도 사용 가능

//export default: 모듈에서 딱 하나만 export하는 경우.
//여러개를 export하는 경우 받아오는 쪽에서 {}를 사용해야 한다.
let count = 0;
export function increase(){
    count++;
    console.log(count);
}

export function getCount(){
    return count;
}