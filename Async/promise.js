function runInDelay(seconds){
    return new Promise((resolve,reject)=>{
        if(!seconds || seconds<0){
            reject(new Error('seconds<0'));
        }
        setTimeout(()=>{
            resolve();
        },seconds*1000);
    });
}

runInDelay(2)
    .then(()=>console.log('타이머 완료!'))
    .catch(console.error)
    .finally(()=>console.log('끝!'));



