//원하는 이름으로 받아와서 사용 가능

import {increase , getCount} from './counter.js';

//import * as counter from './counter.js'
//counter.increase();
//counter.getCount(); 와 같이 사용할 수 도 있음.

increase();
increase();
increase();
increase();
const num = getCount();
console.log(num);

//글로벌 변수가 얽히고 섥히면 매우 불편해짐
//모듈화하자.


