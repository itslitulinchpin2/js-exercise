//static 프로퍼티와 메서드
//static은 클래스 레벨이므로 인스턴스 레벨에서는 접근할 수 없다.
class Fruit{
    #color=red;
    //생성자, new 키워드로 객체 생성할때 호출되는 함수
    constructor(name){
        this.name=name;
    }

    //함수는 function을 붙힐 필요가 없음, 인스턴스 레벨 메서드
    display = () => {
        console.log(`${this.name} is my fruit`);
    };

    //static 메서드
    static makeRandomFruit(){
        //클래스 레벨의 메서드에서는 this를 참조할 수 없음
        return new Fruit('banana');
    }
    static MAX_FRUITS=5;
}

const apple = new Fruit('apple');
console.log(apple)
console.log(apple.MAX_FRUITS); // 얘는 인스턴스 레벨이므로, 클래스레벨의 static 프로퍼티에 접근 불가능.

const banana = Fruit.makeRandomFruit()
console.log(banana)
console.log(Fruit.MAX_FRUITS);



