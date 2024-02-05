const textObj = new String('Hello World!')
const text='hi my name is Tony Montana';
console.log(textObj);
console.log(text);

console.log(text[0]);
console.log(text.charAt(9))

console.log(text.length);

//문자열 처음부터 탐색하여 해당 문자가 처음 발견되는 위치를 반환
console.log(text.indexOf('i')); 

//문자열 끝에서 부터 탐색하여 해당 문자가 처음 발견되는 위치 반환
console.log(text.lastIndexOf('a'))

//문자열이 부분문자열을 포함하는지 확인
console.log(text.includes('Tony'))

//문자열이 특정 문자로 시작하는지 확인
console.log(text.startsWith('j'))
console.log(text.endsWith('a'));

console.log(text.toUpperCase());

//문자열의 부분스트링 인덱스로 가져오기, 0부터 2 미만
console.log(text.substring(0,2));

//해당 인덱스를 시작점으로 문자열 자르기
console.log(text.slice(2));

//끝에서 몇글자 가져오고 싶으면
console.log(text.slice(-2)); //na 반환

//앞뒤 공백 제거
const space = ' daa '
console.log(space.trim());

const longText='Get to the point';
//스페이스별로 문자열을 끊고 싶다면? split 사용
console.log(longText.split(' '));

//[ 'Get', 'to' ]
console.log(longText.split(' ',2));
