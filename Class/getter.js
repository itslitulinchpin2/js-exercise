//접근자 프로퍼티
class Student {
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    //게터는 함수이긴 하지만 속성으로 취급한다.
    get fullName(){
        return `${this.firstName}${this.lastName}`
    }
    //세터 또한 게터와 마찬가지로 함수가 아닌 프로퍼티로 접근한다.
    set friendName(value){
        console.log(value)
    }
}

const student = new Student("김","수지");
console.log(student.fullName);
student.friendName='김연경';

console.log(student.lastName);
