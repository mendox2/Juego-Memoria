//variables globales
const d = document;
let imgN1 =   [
    {nombre: "r6", url: "imagenes/r6.webp"},
    {nombre: "shadow",  url: "imagenes/shadow.webp"},
    {nombre: "gsxs", url: "imagenes/gsxs.jpeg"},  
    {nombre: "vstrom",   url: "imagenes/vstrom.jpg"},
    {nombre: "zx10", url: "imagenes/zx10.webp"},
    {nombre: "mt09", url: "imagenes/mt09.webp"},
    {nombre: "r6", url: "imagenes/r6.webp"},
    {nombre: "shadow",  url: "imagenes/shadow.webp"},
    {nombre: "gsxs", url: "imagenes/gsxs.jpeg"},  
    {nombre: "vstrom",   url: "imagenes/vstrom.jpg"},
    {nombre: "zx10", url: "imagenes/zx10.webp"},
    {nombre: "mt09", url: "imagenes/mt09.webp"},  ];
  let imgN2 = [
    {nombre: "r6", url: "imagenes/r6.webp"},
    {nombre: "shadow",  url: "imagenes/shadow.webp"},
    {nombre: "gsxs", url: "imagenes/gsxs.jpeg"},  
    {nombre: "vstrom",   url: "imagenes/vstrom.jpg"},
    {nombre: "zx10", url: "imagenes/zx10.webp"},
    {nombre: "mt09", url: "imagenes/mt09.webp"},
    {nombre: "r6", url: "imagenes/r6.webp"},
    {nombre: "shadow",  url: "imagenes/shadow.webp"},
    {nombre: "gsxs", url: "imagenes/gsxs.jpeg"},  
    {nombre: "vstrom",   url: "imagenes/vstrom.jpg"},
    {nombre: "zx10", url: "imagenes/zx10.webp"},
    {nombre: "mt09", url: "imagenes/mt09.webp"},
    {nombre: "panigale", url: "imagenes/panigale.webp"},
    {nombre: "s1000",  url: "imagenes/s1000.jpg"},
    {nombre: "panigale", url: "imagenes/panigale.webp"},
    {nombre: "s1000",  url: "imagenes/s1000.jpg"}
  ];
  let imgN3 = [
    {nombre: "r6", url: "imagenes/r6.webp"},
    {nombre: "shadow",  url: "imagenes/shadow.webp"},
    {nombre: "gsxs", url: "imagenes/gsxs.jpeg"},  
    {nombre: "vstrom",   url: "imagenes/vstrom.jpg"},
    {nombre: "zx10", url: "imagenes/zx10.webp"},
    {nombre: "mt09", url: "imagenes/mt09.webp"},
    {nombre: "r6", url: "imagenes/r6.webp"},
    {nombre: "shadow",  url: "imagenes/shadow.webp"},
    {nombre: "gsxs", url: "imagenes/gsxs.jpeg"},  
    {nombre: "vstrom",   url: "imagenes/vstrom.jpg"},
    {nombre: "zx10", url: "imagenes/zx10.webp"},
    {nombre: "mt09", url: "imagenes/mt09.webp"},
    {nombre: "panigale", url: "imagenes/panigale.webp"},
    {nombre: "s1000",  url: "imagenes/s1000.jpg"},
    {nombre: "panigale", url: "imagenes/panigale.webp"},
    {nombre: "s1000",  url: "imagenes/s1000.jpg"},
    {nombre: "tiger", url: "imagenes/tiger900.webp"},
    {nombre: "dr",  url: "imagenes/dr.jpg"},
    {nombre: "s1000",  url: "imagenes/s1000.jpg"},
    {nombre: "dr",  url: "imagenes/dr.jpg"}
  ];

let tablero = d.querySelector(".tablero");
let imagenNombre = []; //guardar nombres de imagen
let imagenID = []; //guardar posiciones de imagen
let aciertos = 0;
let intentos = 0;
let tiempo = 60;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel");
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarTiempo = d.querySelector(".tiempo");
let tiempotrascurrido;
let btn_iniciar = d.querySelector(".btn-iniciar");
let imagenNivel;
let estoyJugando = false;
let sonidoSelecionar = new Audio("./sonidos/seleccion.mp3");
let ambient = new Audio("./sonidos/ambient.mp3");
let sonidoError = new Audio("./sonidos/fail.mp3");
let sonidoWin = new Audio("./sonidos/win.mp3");
let jugador = d.querySelector(".jugador");
jugador.textContent = prompt("Digite su nombre");
let tiempoT = 0;
let intentosT = 0;
let tiempoS = 0;
let tabla = d.querySelector(".table");
//setTimeout()//ejecuta una vez cuando pasa determinado tiempo
//setInterval()//se ejecuta en determinado tiempo infinitamente

//agregar evento al boton para iniciar el juego
btn_iniciar.addEventListener("click", function() {
        ambient.play();
    //alert("juego iniciado");
    //controlar el tiempo del juego
    if(estoyJugando == false && nivel == 1){
        estoyJugando = true;
        nivel1();
    }else if(estoyJugando == false && nivel == 2){
        estoyJugando = true;
        nivel2();
    }else if(estoyJugando == false && nivel == 3){
        estoyJugando = true;
        nivel3();
    }
});



//funcion para agregar las imagenes al tablero
function agregarImaganes() {
    //agregar imagenes dependiendo el nivel
    if(nivel == 1){
        imagenNivel = imgN1;
    }else if(nivel == 2){
        imagenNivel = imgN2;
    }else if (nivel == 3){
        imagenNivel = imgN3;
    }
    //recorrer con un forEach las imagenes del array
    imagenNivel.forEach((imagen, i)=>{
        let div = d.createElement("div"); //crear la etiqueta div
        div.className = "col-3"; //agregar la clase col-3 al div
        let img = d.createElement("img");//crear la etiqueta img
        img.className = "img-fluid altura-img"; //agregar la clase img-fluid a la img
        img.id = i; //enumerar las imagenes por medio de un id
        img.src = "imagenes/tap.jpg"; //agregar la ubicacion de la imagen
        img.addEventListener("click", mostrarImg); //agregar evento click a la imagen
        div.appendChild(img);//agregar la imagen al div
        tablero.appendChild(div);//agregar los div al tablero
    });
}

//funcion para mostrar las imagenes ocultas
function mostrarImg() {
    sonidoSelecionar.play();
    //obtener posicion de la imagen
    let imgID = this.getAttribute("id");
    //alert("# de imagen: "+imgID);
    this.src = imagenNivel[imgID].url; //modificar la url de la imagen
    imagenNombre.push( imagenNivel[imgID].nombre); //guardar los nombres de la imagen
    imagenID.push(imgID);//guardar la posicion de la imagen

    if(imagenNombre.length == 2){
        setTimeout(compararImg, 200);
    }

}

//Funcion para comparar imagenes
function compararImg(){
    let imagenesTablero = d.querySelectorAll(".tablero div img");
    
    if( imagenNombre[0] == imagenNombre[1] ){
        if(imagenID[0] != imagenID[1]){
            
            // alert("felicitacion adivinaste una imagen");
            imagenesTablero[imagenID[0]].src = "imagenes/check.png";
            imagenesTablero[imagenID[1]].src = "imagenes/check.png";
            imagenesTablero[imagenID[0]].removeEventListener("click", mostrarImg);
            imagenesTablero[imagenID[1]].removeEventListener("click", mostrarImg);
            aciertos++;
            mostrarAciertos.textContent = aciertos;
            sonidoWin.play();
        }else{
            alert("Debes escoger otra imagen");
            imagenesTablero[imagenID[0]].src = "imagenes/tap.jpg";
            intentos++;
            mostrarIntentos.textContent = intentos;
            sonidoError.play();
        }
        
    }else{
        // alert("Fallaste las imagenes son diferentes")
        imagenesTablero[imagenID[0]].src = "imagenes/tap.jpg";
        imagenesTablero[imagenID[1]].src = "imagenes/tap.jpg";
        intentos++;
        mostrarIntentos.textContent = intentos;
        sonidoError.play();
    }
    imagenNombre = [];
    imagenID = [];

    //comprobar si se adivinaron todas las imagenes
    if(nivel == 1 && aciertos == 6){
        alert("🎉🎉Felicitaciones pasaste al siguiente nivel🥳🥳");
        //recargar la pagina
        //location.reload();
        clearInterval(tiempotrascurrido);
        estoyJugando = false;
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;
        quitarImg();
    }else if( nivel == 2 && aciertos == 8 ){
        alert("🎉🎉Felicitaciones pasaste al siguiente nivel🥳🥳"); 
        clearInterval(tiempotrascurrido);
        estoyJugando = false;
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        tiempo = 45;
        mostrarTiempo.textContent = tiempo;
        quitarImg();
    }else if(nivel == 3 && aciertos == 10 ){
        confirm("Felicidades, has completado los niveles, ¿Quieres volver a jugar?");
        if (confirm) {
            location.reload();
        }
        clearInterval(tiempotrascurrido);
        datos.forEach(() => {
            let fila = d.createElement("th");
            fila.innerHTML = `
            <th> ${nivel}  </th>
            <th> ${jugador}  </th>
            <th> ${tiempoT}  </th>
            <th> ${intentosT}  </th>
            <th> ${tiempoS}  </th>
            `;
            tabla.appendChild(fila);
            });
    }

}

tiempoT = tiempo.nivel1+tiempo.nivel2+tiempo.nivel3;
intentosT = intentos.nivel1+intentos.nivel2+intentos.nivel3;
tiempoS = tiempo.nivel1-tiempo.nivel2-tiempo.nivel3;

//funciones de niveles
function nivel1() {
    imgN1.sort(()=>Math.random() - 0.5)
    //agregar las imagenes al tablero
    agregarImaganes();
    mostrarNivel.textContent = nivel;
    tiempoDeJuego();
    
}
function nivel2() {
    imgN2.sort(()=>Math.random() - 0.5)
    //agregar las imagenes al tablero
   
    agregarImaganes();
    tiempoDeJuego();
}
function nivel3() {
    imgN3.sort(()=>Math.random() - 0.5)
    //agregar las imagenes al tablero
    agregarImaganes();
    tiempoDeJuego();
}

function tiempoDeJuego() {
    tiempotrascurrido = setInterval( ()=>{
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if(tiempo == 10){
            alert("Rapido!! el tiempo se esta agotando 🙀🙀");
            mostrarTiempo.classList.add("tiempo-agotado");
        }else if(tiempo == 0){
            confirm("Quieres volver a jugar?");
                if (confirm) {
                    location.reload();
                }
            clearInterval(tiempotrascurrido);
            fila.forEach(() => {
                let fila = d.createElement("tr");
                fila.innerHTML = `
                <th> ${nivel}  </th>
                <th> ${jugador}  </th>
                <th> ${tiempoT}  </th>
                <th> ${intentosT}  </th>
                <th> ${tiempoS}  </th>
                `;
                tabla.appendChild(fila);
                });
                
                
              
            
        }
    }, 1000);
}

//funcion para quitar las imagenes del tablero
function quitarImg() {
    let imagenesTablero = d.querySelectorAll(".tablero div");
    imagenesTablero.forEach((img)=>{
        img.remove();
    })
}

/*function cargarDatos() {
    jugador = localStorage.getItem(jugador)
    intentos = JSON.parse(localStorage.getItem(intentos))  
    tiempo = JSON.parse(localStorage.getItem(tiempo)) 
    nivel = JSON.parse(localStorage.getItem(nivel)) 
    aciertos = JSON.parse(localStorage.getItem(aciertos))
}


function guardarDatos() {
    localStorage.setItem(jugador, JSON.stringify(jugador));
    localStorage.setItem(intentos, JSON.stringify(intentosT));
    localStorage.setItem(tiempo, JSON.stringify(tiempoT));
    localStorage.setItem(nivel, JSON.stringify(nivel));
    localStorage.setItem(aciertos, JSON.stringify(aciertos));
}



cargarDatos();
guardarDatos();
*/
let listajuego = "juego"
function guardarDatos(datos){
  let juego = [nivel,jugador.textContent,tiempo,intentos];
  let partidasguardadas = JSON.parse(localStorage.getItem(listajuego));
  if (partidasguardadas != null) {
    juego = partidasguardadas;
  }
  juego.push(datos)
  localStorage.setItem(listajuego, JSON.stringify(juego));
  alert("Se guardaron todos los datos")
}
guardarDatos();
