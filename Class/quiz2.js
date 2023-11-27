class Member{
    
    constructor(name,dept,hours,isPartTime){
        this.name=name;
        this.dept=dept;
        this.hours=hours;
        this.isPartTime=isPartTime;
        this.pay=0;
    }
    payment(hours){
        if (this.isPartTime===true){
            this.pay=this.pay+hours*10000
        } else if (this.isPartTime===false){
            this.pay=this.pay+hours*8000
        }
        return this.pay;
    }
}

let park = new Member('park','movie',2,true);
console.log(park.payment(2));

let kim = new Member('kim','movie',1,false);
console.log(kim.payment(1));