//객체를 만드는 방법
//1. 생성자 함수를 이용 (오래된 고전적 방법)
//2. 클래스 (중요)


//class

class Fruit{

    //생성자, new 키워드로 객체 생성할때 호출되는 함수
    constructor(name){
        this.name=name;
    }

    //함수는 function을 붙힐 필요가 없음
    display = () => {
        console.log(`${this.name} is my fruit`);
    };
}

//apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple');
console.log(apple);
apple.display();