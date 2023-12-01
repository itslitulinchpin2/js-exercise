//0이상 10미만까지 숫자의 2배를 순회하는 이터레이터 만들기
//[Symbol.iterator]() : Iterator{ next():{value,done}}

const multiple={
    [Symbol.iterator](){
        const max = 10;
        let num=0;
        
        return{
            next(){
                return{value: num++ *2 ,done: num>max }
            }
        }
    }
};

for(const num of multiple){
    console.log(num);
}