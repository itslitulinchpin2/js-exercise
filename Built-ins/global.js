//글로벌 객체. object를 통하지 않고 사용할 수 있는 빌트인들

//console.log(globalThis);

 //브라우저에서는 윈도우가 전역 객체다.


console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));

//URL(URI의 하위 개념)
//아스키 문자로만 구성되어야 함
//한글이나 특수문자는 이스케이프 처리해야 한다.
const URL = 'https://승민.com'
const encoded=encodeURI(URL);
console.log(encoded);

const decoded=decodeURI(encoded);
console.log(decoded);

//전체 URL이 아니라 부분적인 것은 Component를 이용
const part='승민.com';
console.log(encodeURIComponent(part));
