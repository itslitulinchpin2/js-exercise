
//함수 내부에서 외부로 부터 온 인자의 값을 변경하면 좋지 않음.
//상태변경이 필요한 경우, 새로운 상태를 만들어서 반환해야 한다.
//원시타입은 copy by value이므로 큰 문제가 없지만
//copy by reference의 경우 재앙이 발생한다.

function display(num){
    num=5;
    console.log(num);
}

const value=4;
display(value);
console.log(value);

function changeName(obj){
    //obj.name="kim"; // 객체 자체가 변경되는 위험!
    
    //아래와 같이 복사 후 변경해서 반환하는 것이 바람직
    return{...obj,name:'kim'}
    
}

const lee = {name:'lee'};

changeName(lee); 
console.log(lee);