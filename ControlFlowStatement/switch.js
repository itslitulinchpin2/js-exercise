//switch문에서 여러 조건에 대해 같은 처리를 할 수 있다.
//break를 잊지 말자!

let condition='okay';
let text;
switch(condition){
    case 'okay':
    case 'good':
        text='좋음!';
        break;
    case 'bad':
        text="c'est pas bien";
        break;
    default:
        text="c'est pas mal"
}
console.log(text);