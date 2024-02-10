//주어진 초가 지나면 콜백을 호출함
//단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay(callback,seconds){
    if (seconds<0){
        throw new Error('0보다 작은 초 오류');
    }
    setTimeout(callback, seconds*1000);
}

try {
    runInDelay(()=>{console.log('출력!')},-1);
} catch(error) {
    console.log(error)
}


