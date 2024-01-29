var texto = document.getElementById('texto').value;

function criptografar() {
    var texto = document.getElementById('texto').value;
    var tamanhoDaPalavra = texto.length;
    var t = new String(texto);

    if(texto.includes("e")){
        let regex = /[e+]/g;
        texto = texto.replace(regex, "enter");
    }
    
    if(texto.includes("i")){
        let regex = /[i+]/g;
        texto = texto.replace(regex, "imes");
    }
    
    if(texto.includes("a")){
        let regex = /[a+]/g;
        texto = texto.replace(regex, "ai");
    }
    
    if(texto.includes("o")){
        let regex = /[o+]/g;
        texto = texto.replace(regex, "ober");
    }
    
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

    if(texto.includes("enter")){
        let regex = /(enter)/g;
        texto = texto.replace(regex, "e");
    }
    
    if(texto.includes("imes")){
        let regex = /(imes)/g;
        texto = texto.replace(regex, "i");
    }

    if(texto.includes("ai")){
        let regex = /(ai)/g;
        texto = texto.replace(regex, "a");
    }
    
    if(texto.includes("ober")){
        let regex = /(ober)/g;
        texto = texto.replace(regex, "o");
    }
    
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