//static 프로퍼티와 메서드
//static은 클래스 레벨이므로 인스턴스 레벨에서는 접근할 수 없다.
class Fruit{
    #color='red';
    //생성자, new 키워드로 객체 생성할때 호출되는 함수
    constructor(name){
        this.name=name;
    }

    //함수는 function을 붙힐 필요가 없음, 인스턴스 레벨 메서드
    display = () => {
        console.log(`${this.name} is my fruit and color is ${this.#color}`);
    };

}

const apple = new Fruit('apple');
console.log(apple)
apple.display();


