var valor = document.getElementById("valor");
var pergunta = document.getElementById("pergunta");
var str = "";
var antigo_str = "";
var condiçao = false;

document.getElementById("score").innerHTML = localStorage.getItem("Score")
setInterval(() => {
  condiçao == false ? condiçao = true : condiçao = false;
}, 100);

function Enviar() {
  var n1 = Math.max(2, Math.floor(Math.random() * 100));
  var n2 = Math.max(2, Math.floor(Math.random() * 100));
  var n3 = Math.max(2, Math.floor(Math.random() * 100));
  var oprc = ["/", "*", "+", "-"]
  var random = Math.floor(Math.random() * oprc.length)
  var prob = Math.floor(Math.random() * 100);

  if (prob < 40) {
    if (condiçao == true) {
      str = `${n1} * ${n2} ${oprc[random]} ${n3}`;
      pergunta.innerHTML = str + "=?";
    } else {
      str = `${n1} * ${n2}`;
      pergunta.innerHTML = str + "=?";
    }
  } else if (prob > 40 && prob < 60) {
    if (condiçao == true) {
      str = `${n1} - ${n2} ${oprc[random]} ${n3}`;
      pergunta.innerHTML = str + "=?";
    } else {
      str = `${n1} - ${n2}`;
      pergunta.innerHTML = str + "=?";
    }
  } else if (prob > 60 && prob < 90) {
    if (condiçao == true) {
      str = `${n1} / ${n2} ${oprc[random]} ${n3}`;
      pergunta.innerHTML = str + "=?";
    } else {
      str = `${n1} / ${n2}`;
      pergunta.innerHTML = str + "=?";
    }
  } else {
    if (condiçao == true) {
      str = `${n1} + ${n2} ${oprc[random]} ${n3}`;
      pergunta.innerHTML = str + "=?";
    } else {
      str = `${n1} + ${n2}`;
      pergunta.innerHTML = str + "=?";
    }
  }

  antigo_str = str;
  str = eval(str);

  var cond = str.toString().split(".")[1];
  if (cond) {
    if (cond.length > 3) {
      let multiplicador = Math.pow(10, 1);
      let resultado = Math.floor(str * multiplicador) / multiplicador;
      str = resultado;
    }
  }
}
Enviar();

var count = Number(localStorage.getItem('Score')) 
document.getElementById("score").innerHTML = count

function resposta() {
  if (valor.value == str) {
    valor.value = "";
    pergunta.innerHTML = "Acertou!";
    setTimeout(() => {
      Enviar();
    }, 850);

if (localStorage.getItem('Score') !== null) { 
  localStorage.setItem('Score', count += 1); } 
else { 
  localStorage.setItem('Score', count += 1);
}
  document.getElementById("score").innerHTML = count
  } else {
    valor.value = "";
    pergunta.innerHTML = "Errou!";
    setTimeout(() => {
      pergunta.innerHTML = antigo_str + "=?";
    }, 850);
    let a = localStorage.getItem('Score');
    let seila = Number(a) - 1
    if(seila <= 0){
      seila = 0
  }
    localStorage.setItem('Score', seila);
    document.getElementById("score").innerHTML = seila
  }
}

window.addEventListener("keypress", function (e) {
  e.keyCode == 13 ? resposta() : console.log();
});
