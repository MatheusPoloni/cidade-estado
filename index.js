let estado = null;
let cidade = {
    valor: null,
    texto: null
}

let campoEstado = null
let campoCidade = null
let campoExibe = null

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    campoEstado = document.getElementById("selectEstado");
    campoCidade = document.getElementById("selectCidade");
    campoExibe = document.getElementById("exibeCidadeEstado");

    campoEstado.addEventListener("change", () => {
        estado = campoEstado.value;
        campoCidade.removeAttribute("disabled");
        campoCidade.add
        habilitaCidades(estado, campoCidade);
    });

    campoCidade.addEventListener("change", () => {
        cidade.valor = campoCidade.value
        cidade.texto = campoCidade.options[campoCidade.selectedIndex].text;

        if (cidade.valor != 0) {
            campoExibe.innerText = `${cidade.texto}/${estado}`;
        }
    });
}

function habilitaCidades(estadoEscolhido, campoCidade) {
let opt1 = document.createElement("option");
let opt2 = document.createElement("option");
let opt3 = document.createElement("option");

let removeOptions = (campoCidade) => {
    while (campoCidade.options.length > 1) {
        campoCidade.remove(1);
    }
}

let adicionaOpcoes = (vl1, txt1, vl2, txt2, vl3, txt3) => {
    opt1.value = vl1;
    opt1.text = txt1;
    campoCidade.add(opt1);
    
    opt2.value = vl2;
    opt2.text = txt2;
    campoCidade.add(opt2);
    
    opt3.value = vl3;
    opt3.text = txt3;
    campoCidade.add(opt3);
}

    switch (estadoEscolhido) {
        case (estadoEscolhido = "0"):
            campoCidade.setAttribute("disabled", "");
            break;

        case (estadoEscolhido = "PE"):
            removeOptions(campoCidade);            
            adicionaOpcoes("1", "Recife", "2", "Olinda", "3", "Caruaru");
            break;

        case (estadoEscolhido = "CE"):
            removeOptions(campoCidade);
            adicionaOpcoes("4", "Fortaleza", "5", "Acaraú", "6", "Caucaia")
            break;
            
            case (estadoEscolhido = "PI"):
                removeOptions(campoCidade);
                adicionaOpcoes("7", "Teresina", "8", "Parnaíba", "9", "Picos")
                break;

            case (estadoEscolhido = "MA"):
                removeOptions(campoCidade);
                adicionaOpcoes("10", "São Luís", "11", "Balsas", "12", "Bacabal")
                break;

            case (estadoEscolhido = "PB"):
                removeOptions(campoCidade);
                adicionaOpcoes("13", "João Pessoa", "14", "Coxixola", "15", "Campina Grande")
                break;

            case (estadoEscolhido = "AL"):
                removeOptions(campoCidade);
                adicionaOpcoes("16", "Maceió", "17", "Jundiá", "18", "Arapica")
                break;

            case (estadoEscolhido = "BA"):
                removeOptions(campoCidade);
                adicionaOpcoes("19", "Salvador", "20", "Porto Seguro", "21", "Alagoinhas")
                break;

            case (estadoEscolhido = "SE"):
                removeOptions(campoCidade);
                adicionaOpcoes("22", "Aracaju", "23", "Simão Dias", "24", "Itabaiana")
                break;

            case (estadoEscolhido = "RN"):
                removeOptions(campoCidade);
                adicionaOpcoes("25", "Natal", "26", "Mossoró", "27", "Canguaretama")
                break;
        }
}