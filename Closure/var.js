function loop(){
    const array=[];
    //var과 let의 차이점!
    //let대신 var을 사용하면 블록개념이 없으므로 다른 값 출력.
    for(let i=0;i<5;i++){
        array.push(function(){
            console.log(i);
        });
    }
    return array;
}

const array = loop();
array.forEach((func)=>func());