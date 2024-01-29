//é preciso usar o value pois o texto não vem diretamente no input
var texto = document.getElementById('texto').value;

function criptografar() {
    var texto = document.getElementById('texto').value;
    var tamanhoDaPalavra = texto.length;
    var t = new String(texto);

    //substituir e por enter
    if(texto.includes("e")){
        //utilizamos o regex para buscar uma ou mais apariçoes do e em toda frase
        let regex = /[e+]/g;
        texto = texto.replace(regex, "enter");
    }
    //substituir i por imes
    if(texto.includes("i")){
        let regex = /[i+]/g;
        texto = texto.replace(regex, "imes");
    }
    //substituir a por ai
    if(texto.includes("a")){
        let regex = /[a+]/g;
        texto = texto.replace(regex, "ai");
    }
    //substituir o por ober
    if(texto.includes("o")){
        let regex = /[o+]/g;
        texto = texto.replace(regex, "ober");
    }
    //substituir u por ufat
    if(texto.includes("u")){
        let regex = /[u+]/g;
        texto = texto.replace(regex, "ufat");
    }
    
    document.getElementById('conteudo__criptografado__imagemGaroto')
        .style.visibility = 'hidden';
    document.getElementById('conteudo__criptografado_titulo')
        .style.visibility = 'hidden';
    document.getElementById('conteudo__criptografado_paragrafo')
        .innerHTML = texto;
    document.getElementById('botaoColar')
        .style.display = "inline-block";
}

function descriptografar() {
    var texto = document.getElementById('texto').value;

    //substituir e por enter
    if(texto.includes("enter")){
        //com o colchetes troca letra por letra do enter por e ficando assim "eeeee"
        let regex = /enter+/g;
        texto = texto.replace(regex, "e");
    }
    //substituir i por imes
    if(texto.includes("imes")){
        let regex = /(imes)/g;
        texto = texto.replace(regex, "i");
    }
    //substituir a por ai
    if(texto.includes("ai")){
        let regex = /(ai)/g;
        texto = texto.replace(regex, "a");
    }
    //substituir o por ober
    if(texto.includes("ober")){
        let regex = /(ober)/g;
        texto = texto.replace(regex, "o");
    }
    //substituir u por ufat
    if(texto.includes("ufat")){
        let regex = /(ufat)/g;
        texto = texto.replace(regex, "u");
    }

    document.getElementById('conteudo__criptografado__imagemGaroto')
        .style.visibility = 'hidden';
    document.getElementById('conteudo__criptografado_titulo')
        .style.visibility = 'hidden';
    document.getElementById('conteudo__criptografado_paragrafo')
        .innerHTML = texto;
    
    document.getElementById('botaoColar')
        .style.display = "inline-block";
}

function copiarTexto() {
    var r = document.createRange();
    r.selectNode(document.getElementById("conteudo__criptografado_paragrafo"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    console.log('Texto copiado com sucesso. ' + r);
    
}