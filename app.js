const hour_el=document.getElementById("hour");
const minutes_el=document.getElementById("minutes");
const seconds_el=document.getElementById("seconds");
const ampm_el=document.getElementById("ampm");
function updateclock(){
    let hour =  new Date().getHours();
    let minutes =  new Date().getMinutes();
    let seconds =  new Date().getSeconds();
    let ampm ="AM"
    if(hour >12){
       hour=hour-12;
       ampm="PM"
    }
    hour= hour<10 ? "0"+ hour : hour;
    minutes=minutes<10 ? "0"+minutes : minutes;
    seconds=seconds<10 ? "0"+seconds : seconds;
     hour_el.innerHTML=hour;
     minutes_el.innerHTML=minutes;
     seconds_el.innerHTML=seconds;
     ampm_el, (innerHTML =ampm);
     setTimeout(()=>{
     updateclock();
     },1000 )
     
}
updateclock();