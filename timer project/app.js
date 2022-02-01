const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2022,0,29,0, 50 ,0);
console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const min = futureDate.getMinutes();
const date = futureDate.getDate();
let month = futureDate.getMonth();
month = months[month];

giveaway.textContent = `giveaway ends on ${date} ${month} ${year} ${hours}:${min}pm`


let futureTime = futureDate.getTime();


function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMIniuties = 60*1000;
    let days = t / oneDay;
    days = Math.floor(days);
    const hours = Math.floor((t % oneDay) / oneHour);
    const minuties = Math.floor((t % oneHour) / oneMIniuties);
    const seconds = Math.floor((t % oneMIniuties) / 1000);

    function format(item){
        if(item < 10){
            return (item = `0${item}`)
        }
        return item;
    }

    const values = [days,hours,minuties,seconds];
    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    })

    if(t < 0){
        clearInterval(countDown);
        deadline.innerHTML = `<h4 class='expired'> Sorry, Time is over</h4>`;
    }
    
}

let countDown = setInterval(getRemainingTime, 1000)
getRemainingTime()