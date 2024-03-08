function fetchEgg(chicken){
    //Promise.resolve()는 static함수임.
    //return new Promise(resolve, reject){} 대신 사용 가능.
    //resolve()안의 값이 함수의 리턴값이다.
    return Promise.resolve(`${chicken} => egg!!`);

}
function fryEgg(egg){
    return Promise.resolve(`${egg} => fried!!`);

}
function getChicken(){
    //return Promise.reject('치킨을 가져올 수 없음!')
    return Promise.resolve(`getChicken!!`);

}
// getChicken()
//     .then(chicken => fetchEgg(chicken))
//     .then(egg => fryEgg(egg))
//     .then(friedEgg => console.log(friedEgg))
//     .catch(error=>console.log(error))

async function fetchChicken(){
    const chicken = await getChicken();
    const egg = await fetchEgg(chicken);
    const friedEgg = await fryEgg(egg);
    console.log(friedEgg);
    return friedEgg;
}

fetchChicken();