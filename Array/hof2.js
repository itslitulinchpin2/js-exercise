//map : 배열의 아이템들을 각각 다른 아이템들로 매핑
//변환해서 새로운 배열을 생성!

const nums = [1,2,3,4];
let result = nums.map((item)=>item*2);
console.log(result);

//화살표 함수 내에서 그냥 리턴할꺼면 중괄호 필요 없지만
//return 키워드를 사용할 것이라면 중괄호가 필요함.

result = nums.map((item)=>{
    if (item%2==0){
        return item*2;
    } else{
        return item;
    }
})

console.log(result);

//Flatmap : 중첩된 배열을 쫘악 펴줌
result = nums.map(item=>[1,2]);
console.log(result);
result=nums.flatMap(item=>[1,2]);
console.log(result);

//활용?
result=['kim','taeri'].map((text)=>text.split(''))
console.log(result);
result=['kim','taeri'].flatMap((text)=>text.split(''))
console.log(result);


//sort 정렬
//문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const text=['hi','abc']
text.sort();
console.log(text);

//주의! 숫자 배열의 경우 제대로 정렬이 안됨, 콜백 필요
const numbers=[0,5,3,10]
console.log(numbers.sort());

//콜백을 적용하면
//<0 a 가 앞으로 정렬, 오름차순
//>0 a가 뒤로 정렬, 내림차순
numbers.sort((a,b)=>{
    return a-b;
})
console.log(numbers)

//reduce 배열의 값을 접어 접어 값을 하나로!
result = [1,2,3,4,5].reduce((sum,value)=>{
    sum+=value;
    return sum;
},0)
console.log(result)