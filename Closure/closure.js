const text = 'hello';
function func(){
    console.log(text)
}
func();

function outer(){
    const x = 0;
    function inner(){
        console.log(`ìnside inner: ${x}`);
    }
    //inner();
    return inner;
}
const func1= outer();
func1(); //클로저에 의해 이너의 값이 출력이 된다.