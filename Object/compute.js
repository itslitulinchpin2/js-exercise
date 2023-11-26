const obj = {
    name:'lee',
    age:23
}

//코딩하는 시점에, 정적으로 접근이 확정됨
//obj.name
//obj.age

//동적으로 속성에 접근하고 싶을 때 대괄호 표기법을 사용한다.
function getValue(obj,key){
    return obj[key];
}

//대괄호 표기법을 사용할 때에는 키값에 ''를 감싸주는 것 잊지 말자.
console.log(getValue(obj,'name'));

