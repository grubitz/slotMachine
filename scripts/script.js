function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
document.getElementById("play").onclick=function(){
    document.getElementsByTagName("h1")[0].style.display="none";

    let things = document.getElementsByClassName("thing");

    for (let i = 0; i<things.length;i++){
        things[i].style.display="none";
}
    let num1 = getRandomInt(2);
    let num2 = getRandomInt(2);
    let num3 = getRandomInt(2);

    document.getElementById("slot1").getElementsByTagName('div')[num1].style.display="block";
    document.getElementById("slot2").getElementsByTagName('div')[num2].style.display="block";
    document.getElementById("slot3").getElementsByTagName('div')[num3].style.display="block";

    if (num1 === num2 && num2 === num3) {
        document.getElementsByTagName("h1")[0].style.display="block";
    }
}