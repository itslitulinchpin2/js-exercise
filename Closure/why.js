//내부 정보를 은닉하고, 공개함수를 통한 데이터 조작을 위해 사용.
// 캡슐화와 정보은닉
//클래스의 private 필드 (예전에는 지원하지 않았음), 메소드 효과와 동일

function makeCounter(){
    let count=0; //count는 은닉되는 효과.
    function increase(){
        count++;
        console.log(count);
    }
    return increase;
}

const increase = makeCounter();
increase();
increase();

// 하지만 이제는 클래스로 쉽게 가능하다.
class Counter{
    #count=0;
    increase(){
        this.#count++;
        console.log(this.#count);
    }
}

const counter = new Counter();
counter.increase();
counter.increase();
counter.increase();