function countdown(){
    var end_date = new Date(2021, 09, 09, 00,00,00);
    var now = new Date();
    var days = document.querySelector(".countdown .days");
    var hours = document.querySelector(".countdown .hours");
    var mins = document.querySelector(".countdown .mins");
    var day = Math.floor((end_date.valueOf() - now.valueOf())/86400000);
    var hour = Math.floor((end_date.valueOf() - now.valueOf() - day * 86400000)/3600000);
    var min = Math.floor((end_date.valueOf() - now.valueOf() - day * 86400000 - hour * 3600000)/60000);
    days.textContent = day;
    hours.textContent = hour;
    mins.textContent = min;
    
    setTimeout(countdown, 60000);
}
countdown();