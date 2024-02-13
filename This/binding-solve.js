function Cat(name){
    this.name=name;

    //2. arrow 함수를 사용: arrow 함수는 렉시컬 환경에서의 this를 기억한다.
    //화살표 함수 밖에서 제일 근접한 스코프의 this를 가리키게 된다.
    this.printName=()=>{
        console.log(`고양이의 이름을 출력한 다음: ${this.name}`);
    };

    //1. bind 함수를 이용해서 수동적으로 바인딩 해주기
    //객체가 만들어지는 시점에 함수가 평생 묶인다.
    //this.printName=this.printName.bind(this);

    //2. 화살표 함수 이용하기!
}

function Dog(name){
    this.name=name;
    this.printName=function(){
        console.log(`강아지의 이름을 출력한 다음: ${this.name}`);
    };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍');

cat.printName();
dog.printName();

dog.printName=cat.printName;
dog.printName(); //고양이 멍! 이 출력됨!! 충격적
//caller가 dog이기 때문!

function printOnMonitor(printName){
    console.log('콜백 실행');
    printName();
}

printOnMonitor(cat.printName)