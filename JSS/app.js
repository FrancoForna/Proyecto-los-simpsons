
//caja del formulario, Formulario y datos//
let cajaFormulario = $("#cajaFormulario");
let formPrinc = $("#formPrinc");

//Caja de aviso//
boxText = $("#boxText")
let boxTrivia = $("#boxTrivia")
let boxAviso = $("#boxAviso")
let imgAviso = $("#imgAviso")
let textAviso = $("#textAviso")
let imgAviso2 = $("#imgAviso2")
let startIt = $("#startIt")
let starTrivia = $("#starTrivia")
//Volver a poner hide!
// let hide = starTrivia.hide();

//Genero accion del boton enviar formulario//
let subForm = $("#submit");

subForm.on("click", function(){
    $("html, body").animate({
        scrollTop: 2000
    }, 300); 
});

subForm.click((e) => {
    e.preventDefault(e);
    let fanson = $(e.target).parent().children(".datosForm");
    
    console.log(fanson[1].value);
    console.log(fanson[0].value);
    console.log(fanson[2].value);
    for (const usuario of fanson) { 
    console.log(usuario.value);
    }
    let usuarios = [];
    for (const iterator of fanson) {
    usuarios.push(iterator.value)
    }
    console.log(usuarios)

    
    let JsonUsuarios = JSON.stringify(usuarios)
    localStorage.setItem("usuarios", JsonUsuarios)
    const ArrayJsonObj = JSON.parse(localStorage.getItem("usuarios"))
    console.log(ArrayJsonObj)


    imgAviso.fadeOut(1000).delay(1000, ()=> {imgAviso2.fadeIn(1000)})
    textAviso.fadeOut(1000).delay(1000, ()=> {boxText.prepend(`<p class="textAviso2">Hola y bienvenido ${fanson[0].value} de ${fanson[2].value}. Muy bien, vamos a comenzar con la trivia.</p>`); startIt.fadeIn(1000) });
    
})

// startIt.click((e) => {
//     e.preventDefault(e);
//     boxTrivia.slideUp(1500).delay(1500, ()=>{starTrivia.slideDown(1000)})
// })
startIt.click((e) => {
    e.preventDefault(e);
    
    let puntaje = [];

    boxTrivia.slideUp(1000)
    $("#openUp").slideDown(1500)
    .delay(100, ()=>{
        $.getJSON("data/datos.json", (action, estado) => {
            for (const recor of action) {
                $("#starTrivia").prepend(`<section id="section${recor.id}">
                        <div id="form${recor.id}" class="boxQuestion">
                        <img class="imgQuestion" src="${recor.img}"> 
                        <form class="formQuestion" id="">
                        <p id="">${recor.pregunta}</p>
                            <button value="${recor.v1}" id="boton${recor.id}${recor.v1}"  class="botonesRespuesta">${recor.respuesta1}</button>
                            <button value="${recor.v2}" id="boton${recor.id}${recor.v2}"  class="botonesRespuesta">${recor.respuesta2}</button>
                            <button value="${recor.v3}" id="boton${recor.id}${recor.v3}"  class="botonesRespuesta">${recor.respuesta3}</button>
                            <button value="${recor.v4}" id="boton${recor.id}${recor.v4}"  class="botonesRespuesta">${recor.respuesta4}</button>
                    </form>
                    </div>
                    </section>`);

                    
$(`#boton${recor.id}${recor.v1}`).click((e) => {
    e.preventDefault();

    let x= false
    console.log(typeof($(`#boton${recor.id}${recor.v1}`).val()))
    console.log($(`#boton${recor.id}${recor.v1}`).val())

    if ($(`#boton${recor.id}${recor.v1}`).val()=== "3") {
        x = true
    console.log("si!!")

    } else { console.log("no!!") 
    }
    
    if (x===true){
        puntaje.push("Correcto");
        console.log("true");

      $(`#boton${recor.id}${recor.v1}`).css({"background-color": "green"}).delay(1500);
      $(`#form${recor.id}`).fadeOut(100).delay(500, ()=> 
      $(`<div class="boxQuestion">
      <img class="imgQuestion" src="https://phantom-marca.unidadeditorial.es/0509cbd44e41f4ffdb98fc8b9867bfe0/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/12/16208494355539.jpg">
      <div class="formQuestion">
      <p class="answerTrivia"> Correcto! </p>
      </div>
      </div>`).appendTo($(`#section${recor.id}`)));

    }else { 
        $(`#boton${recor.id}${recor.v1}`).css({"background-color": "red"}).delay(1500);
        $(`#form${recor.id}`).fadeOut(100).delay(500, ()=> 
        $(`<div class="boxQuestion">
        <img class="imgQuestion" src="https://img.publimetro.cl/sites/3/2020/02/21/0-0/capturadepantalla20180320alas075353-4f6ddff338ed57c22145691690c18e79-800x400.jpg">
        <div class="formQuestion">
        <p class="answerTrivia"> Incorrecto! </p>
        </div>
        </div>`).appendTo($(`#section${recor.id}`)));
        console.log("false")
    }


});
$(`#boton${recor.id}${recor.v2}`).click((b) => {
    b.preventDefault();

    let x= false
    console.log($(`#boton${recor.id}${recor.v2}`).val())

    if ($(`#boton${recor.id}${recor.v2}`).val()=== "3") {
        x = true
    console.log("si!!")

    } else { console.log("no!!") 
    }
    
    if (x===true){
        puntaje.push("Correcto");
        console.log("true");

      $(`#boton${recor.id}${recor.v2}`).css({"background-color": "green"}).delay(1500);
      $(`#form${recor.id}`).fadeOut(100).delay(500, ()=> 
      $(`<div class="boxQuestion">
      <img class="imgQuestion" src="https://phantom-marca.unidadeditorial.es/0509cbd44e41f4ffdb98fc8b9867bfe0/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/12/16208494355539.jpg">
      <div class="formQuestion">
      <p class="answerTrivia"> Correcto! </p>
      </div>
      </div>`).appendTo($(`#section${recor.id}`)));

    }else { 
        $(`#boton${recor.id}${recor.v2}`).css({"background-color": "red"}).delay(1500);
        $(`#form${recor.id}`).fadeOut(100).delay(500, ()=> 
        $(`<div class="boxQuestion">
        <img class="imgQuestion" src="https://img.publimetro.cl/sites/3/2020/02/21/0-0/capturadepantalla20180320alas075353-4f6ddff338ed57c22145691690c18e79-800x400.jpg">
        <div class="formQuestion">
        <p class="answerTrivia"> Incorrecto! </p>
        </div>
        </div>`).appendTo($(`#section${recor.id}`)));
        console.log("false")
    }


});
$(`#boton${recor.id}${recor.v3}`).click((a) => {
    a.preventDefault();

    let x= false
    console.log($(`#boton${recor.id}${recor.v3}`).val())

    if ($(`#boton${recor.id}${recor.v3}`).val()=== "3") {
        x = true
    console.log("si!!")

    } else { console.log("no!!") 
    }
    
    if (x===true){
        puntaje.push("Correcto");
        console.log("true");

      $(`#boton${recor.id}${recor.v3}`).css({"background-color": "green"}).delay(1500);
      $(`#form${recor.id}`).fadeOut(100).delay(500, ()=> 
      $(`<div class="boxQuestion">
      <img class="imgQuestion" src="https://phantom-marca.unidadeditorial.es/0509cbd44e41f4ffdb98fc8b9867bfe0/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/12/16208494355539.jpg">
      <div class="formQuestion">
      <p class="answerTrivia"> Correcto! </p>
      </div>
      </div>`).appendTo($(`#section${recor.id}`)));

    }else { 
        $(`#boton${recor.id}${recor.v3}`).css({"background-color": "red"}).delay(1500);
        $(`#form${recor.id}`).fadeOut(100).delay(500, ()=> 
        $(`<div class="boxQuestion">
        <img class="imgQuestion" src="https://img.publimetro.cl/sites/3/2020/02/21/0-0/capturadepantalla20180320alas075353-4f6ddff338ed57c22145691690c18e79-800x400.jpg">
        <div class="formQuestion">
        <p class="answerTrivia"> Incorrecto! </p>
        </div>
        </div>`).appendTo($(`#section${recor.id}`)));
        console.log("false")
    }


});
$(`#boton${recor.id}${recor.v4}`).click((c) => {
    c.preventDefault();

    let x= false

    console.log($(`#boton${recor.id}${recor.v4}`).val())

    if ($(`#boton${recor.id}${recor.v4}`).val()=== "3") {
        x = true
    console.log("si!!")

    } else { console.log("no!!") 
    }
    
    if (x===true){
        puntaje.push("Correcto");
        console.log("true");

      $(`#boton${recor.id}${recor.v4}`).css({"background-color": "green"}).delay(1500);
      $(`#form${recor.id}`).fadeOut(100).delay(500, ()=> 
      $(`<div class="boxQuestion">
      <img class="imgQuestion" src="https://phantom-marca.unidadeditorial.es/0509cbd44e41f4ffdb98fc8b9867bfe0/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/12/16208494355539.jpg">
      <div class="formQuestion">
      <p class="answerTrivia"> Correcto! </p>
      </div>
      </div>`).appendTo($(`#section${recor.id}`)));

    }else { 
        $(`#boton${recor.id}${recor.v4}`).css({"background-color": "red"}).delay(1500);
        $(`#form${recor.id}`).fadeOut(100).delay(500, ()=> 
        $(`<div class="boxQuestion">
        <img class="imgQuestion" src="https://img.publimetro.cl/sites/3/2020/02/21/0-0/capturadepantalla20180320alas075353-4f6ddff338ed57c22145691690c18e79-800x400.jpg">
        <div class="formQuestion">
        <p class="answerTrivia"> Incorrecto! </p>
        </div>
        </div>`).appendTo($(`#section${recor.id}`)));
        console.log("false")
    }
    


    
});
            }
            $("#resArray").show();
            $("#resArray").click(()=>{ 
                
            $("#resArray").fadeOut(1000, ()=>{
            
            
                if ((puntaje.length === 10)){
                                        $("#devolucion").fadeIn(1000).append(`<div class="boxQuestion">
                                        <div class="formQuestion">
                                       <p class="answerTrivia2">¡Wow! Eres un autentico fan de los simpsons. Seguro que si alguien te pregunta acerca de un capitulo o algun momento iconico lo recuerdas como tu prpio cumpleaños. </p>
                                       </div>
                                       <img class="imgQuestion" src="http://2.bp.blogspot.com/_n5TXawEL_FQ/TLhUc7aMK5I/AAAAAAAAAVA/OM4nB9Kh1po/s1600/frink.gif">
                                        </div>`)
                } else if ((puntaje.length >= 7)){
                                        $("#devolucion").fadeIn(1000).append(`<div class="boxQuestion">
                                        <div class="formQuestion">
                                       <p class="answerTrivia2"> ¡Felicidades! Se nota que llevas mucho tiempo viendo los simpsons. Probablemente eres de las personas que recuerdan esta serie con alegria y no apagan el televisor solo para ver si los simpsons llegan en algun momento.</p>
                                       </div>
                                       <img class="imgQuestion" src="https://www.lavanguardia.com/files/image_449_220/uploads/2016/04/13/5fa2bb8c61c74.jpeg">
                                        </div>`)

                } else if ((puntaje.length > 4)){
                                        $("#devolucion").fadeIn(1000).append(`<div class="boxQuestion">
                                        <div class="formQuestion">
                                       <p class="answerTrivia2"> Has visto algunos capitulos y tienes conocimiento de las situaciones mas conocidas, pero te aconsejamos enchufarte mas con la serie.</p>
                                       </div>
                                       <img class="imgQuestion" src="https://cdn.alfabetajuega.com/wp-content/uploads/2019/11/simpson-homer-780x405.jpg">
                                        </div>`)

                } else {
                                        $("#devolucion").fadeIn(1000).append(`<div class="boxQuestion">
                                        <div class="formQuestion">
                                       <p class="answerTrivia2">Estas algo flojo, te recomendamos prender la television y buscar los simpsons en cuanto puedas!</p>
                                       </div>
                                       <img class="imgQuestion" src="https://pbs.twimg.com/media/AqPsBYFCQAM57Wu.jpg">
                                        </div>`)


                }})



            })
            console.log("El estado es" + estado);
        });})
        
})

