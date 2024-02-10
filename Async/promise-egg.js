function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => egg!!`);

}
function fryEgg(egg){
    return Promise.resolve(`${egg} => fried!!`);

}
function getChicken(){
    return Promise.reject('치킨을 가져올 수 없음!')
    //return Promise.resolve(`getChicken!!`);

}
getChicken()
    .then(chicken => fetchEgg(chicken))
    .then(egg => fryEgg(egg))
    .then(friedEgg => console.log(friedEgg))
    .catch(error=>console.log(error))

//catch는 적절한 순서에 넣어서 처리하면 됨.