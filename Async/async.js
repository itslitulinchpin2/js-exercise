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

//fetchFruits1는 프로미스를 리턴하는 함수
function fetchFruits1(){
    return getBanana()
    .then((banana)=>
        getApple()
        .then(apple=>{
            return [banana,apple]
        }))
}

fetchFruits1().then(console.log);

//async만 붙여서 동기적으로 표현 가능
//단, 프로미스를 리턴하는 함수에는 await를 붙여야 한다.
//리턴값도 프로미스이다.
async function fetchFruits2(){
    //바나나를 받아올때까지 기다렸다 banana에 할당
    const banana = await getBanana(); 

    const apple = await getApple();

    return [banana,apple];
}