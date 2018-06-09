$(document).ready(function() {
  //Armazena as entradas do usuário para calcular mais tarde
  var inputs = [""];
  //String para armazenar a string de entrada atual
  var totalString;
  //Operadores para validação sem o .
  var operators1 = ["+", "-", "/", "*"];
  //Operadores para validação com o .
  var operators2 = ["."];
  //Array de números para validação
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //Adiciona valor à matriz de entradas e verifica a validação
  function getValue(input) {
    if (
      operators2.includes(inputs[inputs.length - 1]) === true &&
      input === "."
    ) {
      console.log("Duplicado '.'");
    } else if (inputs.length === 1 && operators1.includes(input) === false) {
      //Valida para não começar com um operador
      inputs.push(input);
    } else if (operators1.includes(inputs[inputs.length - 1]) === false) {
      //Se o último caractere não foi um operador, adicione o operador ao array
      inputs.push(input);
    } else if (nums.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }
  //função que adiciona um número após o outros
  function update() {
    totalString = inputs.join("");
    $("#steps").html(totalString);
    console.log(inputs);
  }
  //função que armazena o total
  function getTotal() {
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }
  //função responsável por tornar os botões funcionais.
  $("a").on("click", function() {
    if (this.id === "reset") {
      inputs = [""];
      update();
    } else if (this.id === "backSpace") {
      inputs.pop();
      update();
    } else if (this.id === "total") {
      getTotal();
    } else {
      //error1
      if (inputs[inputs.length - 1].indexOf("+", "-", "/", "*", ".") === -1) {
        getValue(this.id);
      } else {
        getValue(this.id);
      }
    }
  });
});
