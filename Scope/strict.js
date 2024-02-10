//엄격 모드 strict mode
//리액트와 같은 프레임워크 사용시 기본적으로 엄격모드임
'use strict';
var x = 1;
// delete x; //엄격모드에서 불가능


function add(x){
    var a = 2;
    b = a + x;
}
// add(1); // 선언되지 않은 변수의 사용 : 엄격모드에서 불가

//엄격모드는 키워드와 선언에 대해 엄격하다.