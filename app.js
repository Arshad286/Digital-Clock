window.onload = () =>{
    function clock() {
        
    const date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();

    hour = hour<10 ? "0" + hour : hour;
    minute = minute<10 ? "0" + minute : minute;
    sec = sec<10 ? "0" + sec : sec;


    document.querySelector('#clock-hour').innerText = hour;
    document.querySelector('#clock-min').innerText = minute;
    document.querySelector('#clock-sec').innerText = sec;
    
    setTimeout(clock, 1000);


}
clock();
}


