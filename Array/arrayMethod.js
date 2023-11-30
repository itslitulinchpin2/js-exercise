//배열의 함수들
//비열 자체를 변경하는지, 새로운 배열을 반환하는지 주목.

const array=[1,2,3,4]

//특정 옵젝트가 배열인지 체크
console.log(Array.isArray(array));

//특정한 아이템의 위치찾기
console.log(array.indexOf(3))

//배열안에 특정아이템이 있는지 확인
console.log(array.includes(2));

//추가 - 제일 뒤에 추가
array.push(5); //배열 자체를 수정함(변경함), 그리고 길이를 리턴
console.log(array);

//제일 앞에 추가
array.unshift(0); //배열 자체를 수정, push와 동일
console.log(array);

//제거 - 제일 뒤
let lastItem= array.pop();
console.log(lastItem);
console.log(array);

//제거 - 제일 앞
lastItem = array.shift();
console.log(lastItem);
console.log(array);

//중간에서 추가, 제거
//몇번째 인덱스에서 몇번 인덱스 미만까지를 삭제? ->splice
array.splice(0,1) //삭제된 아이템을 배열로 반환
console.log(array);

//끝에 파라미터를 더 주면, 설정한 인덱스로부터 추가할 요소가 됨.
array.splice(0,1,5,6);
console.log(array);

//slice메소드는 원래의 배열을 변경하지 않는다.
//잘라진 새로운 배열을 만듬 (몇번 인덱스부터 몇개를)
let newArr = array.slice(0,2)
console.log(newArr);
console.log(array);

//여러개의 배열을 붙여줌
let arr1=[1,2,3]
let arr2=[3,2,1]
let arr3 = arr1.concat(arr2) // arr1은 변경되지 않음
console.log(arr3)
console.log(arr1)

//순서를 거꾸로
arr3 = arr1.reverse();
console.log(arr3)

console.clear();

//배열 안에 중첩된 배열 풀어주기
let arr = [[1,2,3],
            [4,[5,6]],
        ]
    
console.log(arr.flat(2)) //flat은 인자의 단계만큼 풀어줌
arr=arr.flat(2)
console.log(arr)

//특정한 값으로 배열을 채우기
arr.fill(0) //배열 자체를 수정
console.log(arr)

arr.fill('l',1,3);
console.log(arr);

//배열을 문자열로 합하기
let text= arr.join('  ');
console.log(text)