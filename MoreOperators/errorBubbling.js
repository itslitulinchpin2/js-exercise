//Bubbling up, Propagating

function a(){
    throw new Error('error!');
}

function b(){
    a();
}

function c(){
    b();
}

//최종 호출한 시점까지 에러는 전파되므로 캐치 가능.
//에러 캐치 시점은 자유롭게 정할수 있음, a or b or c
try {
    c();
} catch (error){
    console.log('Catched!');
} 
console.log('done! ')