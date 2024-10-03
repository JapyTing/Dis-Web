function saludar(){
    console.log('Diseño web 1');
    //alert disenio web 1
    console.log(document);
    console.log(document.getElementById('parrafo1').innerHTML);
    console.log(document.getElementById('parrafo1'.getAttribute('style')))
}


function cambiarParrafo2(){
    document.getElementById('parrafo2').innerHTML="UNAM FES Aragon"
}



function cambiarFondoBody(){
    const colores = ['#BFFFFF', '#33FF57', '#2222FF', "#22FF11", "#FF2222"];
    const colorArea = colores[Math.floor(Math.random()* 5) ];
    console.log(colorArea)
    document.getElementById('cuerpo').style.backgroundColor= colorArea;
}