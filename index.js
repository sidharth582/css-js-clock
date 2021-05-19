const secondHand = document.querySelector(' .second-hand');
const minuteHand = document.querySelector(' .min-hand');
const hourHand = document.querySelector(' .hour-hand');

function setDate(){
const now=new Date();

const seconds=now.getSeconds();
const secondDegree=((seconds/60)*360)+90;
secondHand.style.transform =`rotate(${secondDegree}deg)`;
console.log(seconds);

const mins=now.getMinutes();
const minuteDegree=((mins/60)*360)+90;
minuteHand.style.transform =`rotate(${minuteDegree}deg)` ;

const hours=now.getHours();
const hoursDegree=((hours/12)*360)+90;
hourHand.style.transform =`rotate(${hoursDegree}deg)`;

}
setInterval(setDate,1000);
setDate();
