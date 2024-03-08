function getBanana(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('banana');
        },1000);
    });
}

function getApple(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('apple');
        },3000);
    });
}

function getOrange(){
    return Promise.reject(new Error('no Orange'));
}

//바나나와 사과를 같이 가지고 오기
//순차적 실행, 총 4초가 걸림.
let array=[];
getBanana()
    .then((banana)=>
        getApple()
        .then(apple=>{
            return [banana,apple]
        }))
    .then(console.log);


//Promise.all 병렬적으로 한 번에 모든 Promise들을 실행!
//위의 코드보다 더 빠르게 실행된다. (3초만 걸림)
Promise.all([getApple(),getBanana()])
        .then((fruit)=>console.log('promise all result: ', fruit));


//Promise.race 주어진 Promise중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(),getApple()])
        .then((fruit)=>console.log('race result: ', fruit)); //banana만 출력함.


//Promise.all 내부에서 에러를 출력한다면?
Promise.all([getApple(),getBanana(),getOrange()])
        .then((fruit)=>console.log('promise all result: ', fruit))
        .catch(console.log)


Promise.allSettled([getApple(),getBanana(),getOrange()])
    .then((fruit)=>console.log('promise allSettled result: ', fruit))
    .catch(console.log)
    // promise allSettled result:  [
    //     { status: 'fulfilled', value: 'apple' },
    //     { status: 'fulfilled', value: 'banana' },
    //     {
    //       status: 'rejected',
    //       reason: Error: no Orange ...
    