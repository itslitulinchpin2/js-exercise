const apple={
    name:'apple',
    display: function(){
        //객체 안에서 자신의 프로퍼티를 접근할 때에는, this를 쓴다.
        console.log(`${this.name} is my fruit.`)
    }
}

apple.display();