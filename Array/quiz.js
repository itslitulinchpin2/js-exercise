//1. 배열의 1을 100으로 바꾸기
//단, 주어진 배열을 수정하지 않도록.

let arr1=[4,3,1,2,4];
let arr2=[...arr1]
for(let i=0;i<arr2.length;i++){
    if (arr2[i]===1){
        arr2[i]=100;
    }
}
console.log(arr2);

//2. 배열에 특정한 요소를 전달받아, 배열안에 그 요소가 몇개인지
function count(array,keyword){
    let count=0;
    for(let i=0;i<array.length;i++){
        if(array[i]==keyword){
            count++;
        }
    }
    console.log("카운트는", count
    )
}

count(arr1,4);

//3. 배열1, 배열2를 전달받아 
// 배열1의 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환

function findArray(arr1,arr2){
    let returnArray=[];

    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<arr1.length;j++){
        if(arr2[j]==arr1[i]){
            returnArray.push(arr2[j])
        }
    }
}
    console.log(returnArray);
}

a=[13,14,15,16]
b=[15,14,2,3,4,5];
findArray(a,b);

function match(input,search){
    const returnArray=[]
    for(let i=0;i<input.length;i++){
        if(search.includes(input[i])){
            returnArray.push(input[i])
        }
    }
    return returnArray;
}

console.log(match(a,b))