function draw() {
    background(220);
  }
  let campoOrcamento;
  let campoInstrumento;
  let campoGuitarra;
  
  function setup() {
    createCanvas(800, 400);
    createElement("h2", "Recomendador de guitarra");
    createSpan("Quanto você pode gastar R$");
    campoOrcamento = createInput("1000");
    campoInstrumento = createCheckbox("Gosta de Instrumentos?");
    campoGuitarra = createCheckbox("Gosta de Guitarras?");
  }
  
  function draw() {
    background("white");
    let orcamento = parseFloat(campoOrcamento.value());
    let gostaDeInstrumentos = campoInstrumento.checked();
    let gostaDeGuitarra = campoGuitarra.checked();
    let recomendacao = geraRecomendacao(orcamento, gostaDeInstrumentos, gostaDeGuitarra);
  
    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(18);
    text(recomendacao, width / 2, height / 2);
  }
  
  function geraRecomendacao(orcamento, gostaDeInstrumentos, gostaDeGuitarra) {
    if (orcamento >= 1000) {
      if (gostaDeInstrumentos) {
        return "Guitarra Életrica Tagima Tw Series Tg-510 - álem de ter estilo carrega um som pesado e ideal para shows.";
      } else if (gostaDeGuitarra) {
        return "PHX Telecaster TL1 - ideal para quem quer um modelo custo benefício.";
      } else {
        return "Seizi Vision - perfeito para quem busca talento sem gastar uma fortuna.";
      }
    } else if (orcamento >= 750) {
      if (gostaDeInstrumentos) {
        return "Stratocaster - excelente para quem tem orçamento baixo.";
      } else if (gostaDeGuitarra) {
        return "Queens D137561 - uma Stratocaster ideal para quem busca tecnologia com pouco dinheiro.";
      } else {
        return "Guitarra Elétrica Giannini G-101 - ótimo custo benefício.";
      }
    } else {
      if (gostaDeInstrumentos) {
        return "Guitarra Giannini Standart G-102 - outro custo benefício muito bom.";
      } else if (gostaDeGuitarra) {
        return "Guitarra Életrica Giannini Standart G-100 - ideal para fazer sons mais distorcidos sem gastar muito.";
      } else {
        return "Guitarra Életrica Malibu Stratocaster - ideal para inciantes sem gastar muito.";
      }
    }
  }