
function output(number){
    console.log(number)
}

function double(number){
    console.log(2*number)
}

function callback(number,action){
    for(let i=1;i<=number;i++){
        action(i);
    }
}

callback(5,output)
callback(5,double);

setTimeout(()=>console.log("1초 뒤에 이 콘솔이 실행될 것입니다."),1000);