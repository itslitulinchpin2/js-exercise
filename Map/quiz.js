//중복 제거하기

const numbers=[1,2,3,1,2,4];

const results=new Set(numbers);
console.log([...results]);

//주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들기
const set1=new Set([1,2,3,4,5]);
const set2=new Set([1,2,3]);

const set = new Set();
set1.forEach(value1=>{
    if (set2.has(value1)){
        set.add(value1);
    }
})
console.log(set);

const newSet = [...set1].filter(item=>set2.has(item));
console.log(newSet);
