function time(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
var ID=setInterval(time,1000);
setTimeout(function(){clearInterval(ID);},10000);

