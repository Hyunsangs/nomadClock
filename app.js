const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");  //문자열로 변환해야한다.
    const minutes = String(date.getMinutes()).padStart(2, "0"); // padStart가 왜냐하면 앞에 문자를 넣는 개념
    const Seconds = String(date.getSeconds()).padStart(2, "0"); // 이기때문이다.
    clock.innerText = (`${hours}:${minutes}:${Seconds}`);
}

getClock();
setInterval(getClock, 1000);
 
// padStart() 이란 "1".padStart(2(문자열길이), "0"(1앞쪽에 0을 추가함))
// 그래서 결론적으로 "01" 이라는 결과가 나옴

// setInterval(sayHello, 5000); // 5000ms , 5초마다 콘솔에 찍힘 

//setTimeout(sayHello, 5000); // 5초마다 콘솔에 찍힘

// new Data().getSeconds or new Data().getHours or new Data().getMinues() 등 있음
// new Data().getDay 등등
