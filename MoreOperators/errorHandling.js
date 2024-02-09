//try catch finally



function readFile(path){
    throw new Error('파일 경로를 찾을 수 없음');
    //에러가 던져지면 그 아래는 실행되지 않음.
    return '파일의 내용';
}

function processFile(path){
    let content;
    try {
    content = readFile(path);
    } catch (error){
        console.log(error);
        content='기본내용';
    } finally {
        console.log('성공하든 실패하든 마지막으로 리소스 정리');
    }
    
    const result = 'hi ' + content;
    return result;
}

const result = processFile("경로")
console.log(result);