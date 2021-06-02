//Seccion del header con titulo
let header = $("#headerP");
header.append(`<div id="divCont"><div id="divContH"><h1  id="tit"> Bienvenidos a Pool web </h1></div></div>`);

//Defino var para ser mas ordenado
let start = $("#firstForm")
let divHeader = $("#divCont");
let divHeaderHijo = $("#divContH");
let titOne = $("#tit");

//Aplico CSS a variables
divHeader.css({"display": "flex", "width": "100%", "justify-content": "center"});
divHeaderHijo.css({"display": "flex", "width": "65%"});
titOne.css({"display": "none", "color": "red", "font-size": "80px"});
titOne.fadeIn(5000);

//Agrego al div que ira rotando
$("body").append(`<div id="prin"><div id="divP"></div><div id="divP1"></div></div>`);
let divPrin = $("#prin")
divPrin.css({"witdh": "100%", "display":"flex", "flex-flow":"row" ,"justify-content":"space-evenly"})

//Agrego al primer hijo(imagen)
let divPartner = $("#divP")
divPartner.append(`<img id="partner" src="Imgs/partner-removebg-preview.png">`);
divPartner.css({"width":"45%","flex-flow":"column wrap" })
let partner = $("#partner");
partner.css({"display":"none", "width":"100%","max-height": "auto", "border-radius":"10px" , })
partner.fadeIn(5000);

//Agrego al segundo
let divTexto = $("#divP1")
divTexto.css({"flex-flow":"column wrap", "align-content":"center" ,"width":"45%"})
divTexto.append(`<p id="TP"> Si si, ya se lo que piensan.. ¿Saben a quien tuve que rogar para tener mi página verdad? No puedo decirlo, pero empieza con W y termina con olverine. Ahora presionen ese logo de ahi abajo y sigamos, no perdamos tiempo. </p>`) 
let textoPrincipal = $("#TP")
textoPrincipal.css({"font-size":"30px", "color": "red", "display": "none" })
textoPrincipal.slideDown(2500)

//Genero botton para interactuar
$("body").append(`<div id="espacioBtn"><div id="espacioBtnI"><img id="lS" src="Imgs/partner0-removebg-preview.png"></div></div>`)
let espacioBotones1 = $("#espacioBtn")
let espacioBotones2 = $("#espacioBtnI")
let botonesF = $(".botones")
let bottonA = $("#lS")

espacioBotones1.css({"witdh":"100%", "display": "flex", "justify-content": "space-around"})
espacioBotones2.css({"width": "55%", "display": "flex", "justify-content":"center"})
botonesF.css({"height":"1px", "background-color": "red", "border": "black solid 1px"})
bottonA.click((e) => {
    e.preventDefault();
    textoPrincipal.slideUp(500)
    divTexto.prepend(`<p id="TP2"> Ya se porque estas aqui, quieres pertenecer a X-FORCE. Muy bien, primero tenemos que conocerte. asi que presionen de nuevo el logo con mi hermosa cara y sigamos.</p>`)
    let textoSecundario = $("#TP2");
    textoSecundario.css({"font-size":"30px", "color": "red", "display": "none"})
    textoSecundario.slideToggle(500).delay(2000)
    bottonA.hide() //Aca iria
    espacioBotones2.append(`<img id="lS2" src="Imgs/partner0-removebg-preview.png">`);
    let botonB = $("#lS2");
    let botonesF = $(".botones")
    botonesF.css({"color": "white", "height":"50px", "background-color": "black", "border": "black solid 1px", "display": "none"})
    botonB.slideDown(1000);
    botonB.click((e) => {
        e.preventDefault();
        divHeader.slideUp(1000)
        divPrin.slideUp(1000)
        divPartner.slideUp(1000)
        start.slideDown(3000)
        botonB.slideToggle(1000)
        // botonB.click((e) => {
        //     e.preventDefault();
        // })
        // divHeader.slideDown(1000).append(`<h2 id="tit2"> Empecemos </h2>`).slideDown(1000)
        // let segundoTitulo = $("#tit2");
        // segundoTitulo.css({"display": "none", "color": "red", "font-size": "80px"});
        // segundoTitulo.slideDown(3500);
        // divPartner.append(`<img id="partner2" src="Imgs/partner2-removebg-preview.png">`);
        // let partner2 = $("#partner2")
        // partner2.css({"display":"none", "padding":"20px","width":"auto", "max-height": "auto", "border-radius":"200px" })
        // partner2.fadeIn(1500);
    })

})

let botonForm = $("#submit");
let form = $("#formPrinc");
let lForm = $("#lForm");
let botonFc = $("#formC");

botonForm.click((evento) => {
evento.preventDefault();
let hijos = $(evento.target).parent().children(".datosForm");
lForm.prepend(`<p class="tRelevante">Hola y bienvenido a X Force, ${hijos[0].value}, asi que estas aqui porque, ${hijos[2].value} </p>` , `<p class="tRelevante"> Muy bien, vamos a hacerte unas preguntas para ver si estas capacitado.</p>`);
console.log(hijos[1].value);
console.log(hijos[2].value);
console.log(hijos[3].value);
 form.slideUp(1000);
 botonFc.fadeIn(3000);
for (const usuario1 of hijos) { 
    console.log(usuario1.value);
    }
let usuarios = [];
for (const iterator of hijos) {
    usuarios.push(iterator.value)
}
console.log(usuarios)

let JsonUsuarios = JSON.stringify(usuarios)
localStorage.setItem("usuarios", JsonUsuarios)
const ArrayJsonObj = JSON.parse(localStorage.getItem("usuarios"))
console.log(ArrayJsonObj)

})

let question = $("#question")
let form1 = $("#form1")

botonFc.click((e) => {
    e.preventDefault();
    start.slideUp(1);
    question.fadeIn(1000).delay(1000)
    form1.fadeIn(5000)
})

//Obtener preguntas del Ajax

$.getJSON("data/datos.json", (action, estado) => {
    for (const recor of action) {
        $("#question").append(`
        <form class="formPreguntas" id="">
            <p id="">${recor.pregunta}</p>
            <div class="divSecun_12">
                <input class="p1" type="radio" id="" name="answers" value="${recor.v1}">
                <label id="r1">${recor.respuesta1}</label>
                <input class="p1" type="radio" id="" name="answers" value="${recor.v2}">
                <label id="r2">${recor.respuesta2}</label>
                <input class="p1" type="radio" id="" name="answers" value="${recor.v3}">
                <label id="r3">${recor.respuesta3}</label>
                <input class="p1" type="radio" id="" name="answers" value="${recor.v4}">
                <label id="r4">${recor.respuesta4}</label>
                <button id="" class="botonesRespuesta botoness">Enviar</button>
            </div>
        </form>
        <img class="imgTeam" src="${recor.img}"> `);
    }
    console.log("El estado es" + estado);
});

//Defino array de puntaje//
let puntaje = [];


let botonP1 = $(".botonesRespuesta");
// let divSecun1 = $(".divSecun1")
// let divSecun2 = $(".divSecun2")
botonP1.click((e) => {
    e.preventDefault();
    let q1 = $(e.target).parent().children("input");
    console.log(q1)


    let x=false

    for (const i of q1) {
        console.log(i)
        if (i.checked && i.value=="3") {
            x = true
        

        } else {
        }

    }

    if (x===true){
        puntaje.push()
    //    $("").fadeOut(1)
       $(`<p class="correc"> Correcto! </p>`).appendTo($("#form1")).fadeOut(1000)

    }else {$(`<p class="incorrec"> Incorrecto </p>`).appendTo($("#form1")).fadeOut(1000, ()=> $(".incorrec").remove());}

 console.log(puntaje.length)
})


// let botonP2 = $("#botonP2");

// botonP2.click((e) => {
//     e.preventDefault();
//     let q2 = $(e.target).parent().children("input");
//     console.log(q2)


//     let x=false

//     for (const i of q2) {
//         console.log(i)
//         if (i.checked && i.value=="3") {
//             x = true
        

//         } else {
//         }

//     }

//     if (x===true){
//         puntaje.push()
//        $("#q2").fadeOut(1)
//        $(`<p class="correc"> Correcto! </p>`).appendTo($("#form2")).fadeOut(1000, ()=> {$("#form3").fadeIn(100)})

//     }else {$(`<p class="incorrec"> Incorrecto </p>`).appendTo($("#form2")).fadeOut(1000, ()=> $(".incorrec").remove());}

// })

// let botonP3 = $("#botonP3");

// botonP3.click((e) => {
//     e.preventDefault();
//     let q3 = $(e.target).parent().children("input");
//     console.log(q3)


//     let x=false

//     for (const i of q3) {
//         console.log(i)
//         if (i.checked && i.value=="3") {
//             x = true
        

//         } else {
//         }

//     }

//     if (x===true){
//         puntaje.push()
//        $("#q3").fadeOut(1)
//        $(`<p class="correc"> Correcto! </p>`).appendTo($("#form3")).fadeOut(1000, ()=> {$("#form4").fadeIn(100)})

//     }else {$(`<p class="incorrec"> Incorrecto </p>`).appendTo($("#form3")).fadeOut(1000, ()=> $(".incorrec").remove());}

// })

// let botonP4 = $("#botonP4");

// botonP4.click((e) => {
//     e.preventDefault();
//     let q4 = $(e.target).parent().children("input");
//     console.log(q4)


//     let x=false

//     for (const i of q4) {
//         console.log(i)
//         if (i.checked && i.value=="3") {
//             x = true
        

//         } else {
//         }

//     }

//     if (x===true){
//         puntaje.push()
//        $("#q4").fadeOut(1)
//        $(`<p class="correc"> Correcto! </p>`).appendTo($("#form4")).fadeOut(1000, ()=> {$("#form5").fadeIn(100)})

//     }else {$(`<p class="incorrec"> Incorrecto </p>`).appendTo($("#form4")).fadeOut(1000, ()=> $(".incorrec").remove());}

// })
// let botonP5 = $("#botonP5");

// botonP5.click((e) => {
//     e.preventDefault();
//     let q5 = $(e.target).parent().children("input");
//     console.log(q5)


//     let x=false

//     for (const i of q5) {
//         console.log(i)
//         if (i.checked && i.value=="3") {
//             x = true
        

//         } else {
//         }

//     }

//     if (x===true){
//         puntaje.push()
//        $("#q3").fadeOut(1)
//        $(`<p class="correc"> Correcto! </p>`).appendTo($("#form3")).fadeOut(1000, ()=> {$("#form4").fadeIn(100)})

//     }else {$(`<p class="incorrec"> Incorrecto </p>`).appendTo($("#form3")).fadeOut(1000, ()=> $(".incorrec").remove());}

// })



//Desafio Ajax 
// Obtener ajax de url

$("#mAjax").append(`<button class="botoness" id="botonAjax">Obtener informacion de JSON via internet</button>`);

let dAjax = "http://hp-api.herokuapp.com/api/characters";

$("#botonAjax").click((e) => {
    e.preventDefault();
    $.get(dAjax, (action, state) => {
        if (state === "success") {

            let actionH = action;
            //recorro el array y dps recorro dentro del objeto
            for (const ejec of actionH) {
                $("#mAjax").append(
                    `<div>
                        <p class="tRelevante">${ejec.name}</p>
                        </div>`
                );
            }
        }
    });
});

// Obtener ajax local 

$("#mAjax").append(`<button class="botoness" id="botonAjax2">Obtengo informacion de mi JSON</button>`);

$("#botonAjax2").click((e) => {
    e.preventDefault();
    $.getJSON("data/datos.json", (action, estado) => {
        $("#mAjax").append(`<h2 class="tituloForm"> Los integrantes de fuerza X son: </h2>`)
        for (const recor of action) {
            $("#mAjax").append(`<div>
                    <p class="tRelevante"> Nombre: ${recor.nombre}</p>
                    <p class="tRelevante"> Super poder: ${recor.superpoder}</p>
                    <img class="imgTeam" src="${recor.img}">
                    </div>`);
        }
        console.log("El estado es" + estado);
    });
}); 
