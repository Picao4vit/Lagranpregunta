const botonSi=document.getElementById("boton_si");
const botonNO=document.getElementById("boton_no");

botonSi.addEventListener("click",()=>{
    confetti();
    confetti();
    confetti();
    confetti();
    alert("OMG!!!!!!!");

})

botonNO.addEventListener("mouseover",()=>{
    const x = Math.random() * (window.innerWidth - botonNO.offsetWidth);
    const y = Math.random() * (window.innerHeight - botonNO.offsetHeight);

    botonNO.style.position="absolute";
    botonNO.style.left=x+"px";
    botonNO.style.top=y + "px";

})


