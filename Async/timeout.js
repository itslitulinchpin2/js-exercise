function execute(){
    console.log('1');

    //아래 콜백함수를 던져만 넣고 넘어가서 3을 먼저 출력
    setTimeout(()=>{
        console.log('2')
    },3000);
    console.log('3')
}
execute();

//1 3 2 출력