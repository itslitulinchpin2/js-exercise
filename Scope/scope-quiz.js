{
    const x = 1;
    {
        const y = 2;
        console.log(x);
    }
    console.log(x);
    //console.log(y); 얘는 불가.
    
}

const text = 'a'; //전역 변수, 전역 스코프
{
    const text = 'b'; // 로컬변수, 로컬 스코프
    {
        console.log(text); //b
    }
}