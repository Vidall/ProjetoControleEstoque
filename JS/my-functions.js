//---------------------------------------------------------botao voltar na pagina de saidas para a index
function voltar() {
  window.location.href = "index.html";
}

//---------------------------------------------------------navegar para o conteudo Registro de Saidas
function navegarSaida() {
  //carregar conteudo form-saida.html
  $(document).ready(function () {
    // Função para carregar o conteúdo do main
    function carregarConteudo() {
      $.ajax({
        url: "form-saida.html",
        success: function (data) {
          $("#main").html(data);
        },
        error: function () {
          $("#main").html("Erro ao carregar o conteúdo.");
        },
      });
    }

    // Carrega o conteúdo ao carregar a página
    carregarConteudo();
  });

  //---------------------------------------------------------mudar classe quando mudar o conteudo para a pagina de Saidas
  const elemento = document.getElementById("main");
  elemento.classList.remove("corpo");
  elemento.classList.add("corpo-saida");

  //---------------------------------------------------------mudar parametro de margin da conteudo form-saida
  const estilo = document.querySelector(".corpo-saida");
  estilo.style.marginTop = "86px";
}

//---------------------------------------------------------navegar para a o conteudo de Entradas
function navegarEntrada() {
  //carregar conteudo form-saida.html
  $(document).ready(function () {
    // Função para carregar o conteúdo do main
    function carregarConteudo() {
      $.ajax({
        url: "form-entrada.html",
        success: function (data) {
          $("#main").html(data);
        },
        error: function () {
          $("#main").html("Erro ao carregar o conteúdo.");
        },
      });
    }

    // Carrega o conteúdo ao carregar a página
    carregarConteudo();
  });
  const elemento = document.getElementById("main");
  elemento.classList.remove("corpo");
  elemento.classList.add("corpo-saida");

  //mudar parametro de margin da conteudo form-saida
  const estilo = document.querySelector(".corpo-saida");
  estilo.style.marginTop = "86px";
}

//---------------------------------------------------------iniciar a camera
function AtivarCamera() {
  const camera = document.getElementById("icamera");
  const estiloDisplay = getComputedStyle(camera).getPropertyValue("display");
  if (estiloDisplay === "none") {
    console.log('o display está none')
    camera.style.display = "block";
  } else {
    console.log('o display está block')
    camera.style.display = "none";
  }

  // Selecione o elemento de input
  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#icamera"), // Or '#yourElement' (optional)
      },
      decoder: {
        readers: ["code_128_reader"],
      },
    },
    function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
    }
  );

  Quagga.onDetected(function (data) {
    console.log(data)
  })
}
