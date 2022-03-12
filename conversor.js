function ConverterCobre() {
    var valorElemento = document.getElementById("valorcobre");
    var valor = valorElemento.value;
    var valorCobre = parseFloat(valor);

    var conversaoPrata = valorCobre / 10;
    var conversaoElectro = valorCobre / 50;
    var conversaoOuro = valorCobre / 100;
    var conversaoPlatina = valorCobre / 10000;

    var Prata = document.getElementById("valorprata")
    var Electro = document.getElementById("valorelectro")
    var Ouro = document.getElementById("valorouro")
    var Platina = document.getElementById("valorplatina")

    var convertidoPrata = "o valor em Prata é: " + conversaoPrata;
    var convertidoElectro = "o valor em Electro é: " + conversaoElectro;
    var convertidoOuro = "o valor em Ouro é: " + conversaoOuro;
    var convertidoPlatina = "o valor em Platina é: " + conversaoPlatina;

    Prata.innerHTML = convertidoPrata;
    Electro.innerHTML = convertidoElectro;
    Ouro.innerHTML = convertidoOuro;
    Platina.innerHTML = convertidoPlatina;
}
function ConverterPrata() {
    var valorElement = document.getElementById("valorpica");
    var valo = valorElement.value;
    var valorPrata = parseFloat(valo);

    var conversaoPrataQ = valorPrata * 10;
    var conversaoElectroQ = valorPrata / 5;
    var conversaoOuroQ = valorPrata / 10;
    var conversaoPlatinaQ = valorPrata / 1000;

    var PrataQ = document.getElementById("valorprataQ")
    var ElectroQ = document.getElementById("valorelectroQ")
    var OuroQ = document.getElementById("valorouroQ")
    var PlatinaQ = document.getElementById("valorplatinaQ")

    var convertidoPrataQ = "o valor em Cobre é: " + conversaoPrataQ;
    var convertidoElectroQ = "o valor em Electro é: " + conversaoElectroQ;
    var convertidoOuroQ = "o valor em Ouro é: " + conversaoOuroQ;
    var convertidoPlatinaQ = "o valor em Platina é: " + conversaoPlatinaQ;

    PrataQ.innerHTML = convertidoPrataQ;
    ElectroQ.innerHTML = convertidoElectroQ;
    OuroQ.innerHTML = convertidoOuroQ;
    PlatinaQ.innerHTML = convertidoPlatinaQ;
}
function ConverterElectro() {
    var valorElementE = document.getElementById("valorelectropica");
    var valoE = valorElementE.value;
    var valorElectro = parseFloat(valoE);

    var conversaoPrataQE = valorElectro * 50;
    var conversaoElectroQE = valorElectro * 5;
    var conversaoOuroQE = valorElectro / 2;
    var conversaoPlatinaQE = valorElectro / 200;

    var PrataQ = document.getElementById("valorprataQE")
    var ElectroQ = document.getElementById("valorelectroQE")
    var OuroQ = document.getElementById("valorouroQE")
    var PlatinaQ = document.getElementById("valorplatinaQE")

    var convertidoPrataQE = "o valor em Cobre é: " + conversaoPrataQE;
    var convertidoElectroQE = "o valor em Prata é: " + conversaoElectroQE;
    var convertidoOuroQE = "o valor em Ouro é: " + conversaoOuroQE;
    var convertidoPlatinaQE = "o valor em Platina é: " + conversaoPlatinaQE;

    PrataQ.innerHTML = convertidoPrataQE;
    ElectroQ.innerHTML = convertidoElectroQE;
    OuroQ.innerHTML = convertidoOuroQE;
    PlatinaQ.innerHTML = convertidoPlatinaQE;
}
function ConverterOuro() {
    var valorElementEW = document.getElementById("valorouropica");
    var valoEW = valorElementEW.value;
    var valorOuro = parseFloat(valoEW);

    var conversaoPrataQEW = valorOuro * 100;
    var conversaoElectroQEW = valorOuro * 10;
    var conversaoOuroQEW = valorOuro * 2;
    var conversaoPlatinaQEW = valorOuro / 100;

    var PrataQW = document.getElementById("valorprataQEW")
    var ElectroQW = document.getElementById("valorelectroQEW")
    var OuroQW = document.getElementById("valorouroQEW")
    var PlatinaQW = document.getElementById("valorplatinaQEW")

    var convertidoPrataQEW = "o valor em Cobre é: " + conversaoPrataQEW;
    var convertidoElectroQEW = "o valor em Prata é: " + conversaoElectroQEW;
    var convertidoOuroQEW = "o valor em Electro é: " + conversaoOuroQEW;
    var convertidoPlatinaQEW = "o valor em Platina é: " + conversaoPlatinaQEW;

    PrataQW.innerHTML = convertidoPrataQEW;
    ElectroQW.innerHTML = convertidoElectroQEW;
    OuroQW.innerHTML = convertidoOuroQEW;
    PlatinaQW.innerHTML = convertidoPlatinaQEW;
}
function ConverterPlatina() {
    var valorElementEWS = document.getElementById("valorplatinapica");
    var valoEWS = valorElementEWS.value;
    var valorPlatina = parseFloat(valoEWS);

    var conversaoPrataQEWS = valorPlatina * 10000;
    var conversaoElectroQEWS = valorPlatina * 1000;
    var conversaoOuroQEWS = valorPlatina * 200;
    var conversaoPlatinaQEWS = valorPlatina * 100;

    var PrataQWS = document.getElementById("valorprataQEWS")
    var ElectroQWS = document.getElementById("valorelectroQEWS")
    var OuroQWS = document.getElementById("valorouroQEWS")
    var PlatinaQWS = document.getElementById("valorplatinaQEWS")

    var convertidoPrataQEWS = "o valor em Cobre é: " + conversaoPrataQEWS;
    var convertidoElectroQEWS = "o valor em Prata é: " + conversaoElectroQEWS;
    var convertidoOuroQEWS = "o valor em Electro é: " + conversaoOuroQEWS;
    var convertidoPlatinaQEWS = "o valor em Ouro é: " + conversaoPlatinaQEWS;

    PrataQWS.innerHTML = convertidoPrataQEWS;
    ElectroQWS.innerHTML = convertidoElectroQEWS;
    OuroQWS.innerHTML = convertidoOuroQEWS;
    PlatinaQWS.innerHTML = convertidoPlatinaQEWS;
}