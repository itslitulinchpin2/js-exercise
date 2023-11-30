//5보다 큰 숫자들의 평균
const nums = [3,16,5,25,4,34,21]

function average(array){
    let result=0;
    const newArray=array.filter((value)=>{
        if(value>5){
            return value;
        }
    })
    console.log(newArray)
    newArray.forEach((item)=>{
        result+=item;
    })
    console.log(result);
    return parseFloat(result/newArray.length);
    
}
console.log(average(nums));

//숏코딩 솔루션
const result2=nums.filter(item=>item>5).reduce((avg,num,index,array)=>avg + num/array.length
,0)
console.log(result2)