// JSON : JavaScript Object Notation
// 서버와 클라이언트간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringfy(object) : JSON으로 만들어줌
// parse(JSON): objec로 만들어 줌

const lee1 = {
    name: 'lee',
    age: 25,
    eat: ()=>console.log('eat')
}

//직렬화 serializing. 객체를 문자열로 반환
const lee2 = JSON.stringify(lee1);

console.log(lee1);

//함수는 출력되지 않음
//제이슨은 객체의 프로퍼티만 포함된다.
console.log(lee2);

//역직렬화. Deserializing, 문자열을 JS객체로 변환
const obj = JSON.parse(lee2);
console.log(obj);