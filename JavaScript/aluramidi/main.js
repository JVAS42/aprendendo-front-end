/*function tocaSom (idElementoAudio) { 
    document.querySelector(idElementoAudio).play();
}*/
function tocaSom (seletorElemento) { 
    const elemento = document.querySelector(seletorElemento);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Element not found');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento);
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup =  function () {
        tecla.classList.remove('ativa');
    }

}
