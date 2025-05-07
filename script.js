gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel:not(:last-child)", {
  yPercent: -100, 
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true
  }
});


gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});

// Pelegrinos

{
  function atualizarTempo() {
    const dataInicial = new Date(2022, 6, 7, 21, 2);
    const agora = new Date();

    let diferencaMs = agora - dataInicial;

    const segundosTotais = Math.floor(diferencaMs / 1000);
    const dias = Math.floor(segundosTotais / (60 * 60 * 24));

    const restanteSegundos = segundosTotais % (60 * 60 * 24);
    const horas = Math.floor(restanteSegundos / 3600);
    const minutos = Math.floor((restanteSegundos % 3600) / 60);
    const segundos = restanteSegundos % 60;

    const tempoFormatado = `${dias} dias, ` +
                           `${horas.toString().padStart(2, '0')} horas, ` +
                           `${minutos.toString().padStart(2, '0')} minutos, ` +
                           `${segundos.toString().padStart(2, '0')} segundos`;

    document.getElementById('pelegrinos-tempo').textContent = tempoFormatado;
  }

  atualizarTempo();
  setInterval(atualizarTempo, 1000);
    
  }

  // Academia

{
  function atualizarTempo() {
    const dataInicial = new Date(2023, 0, 7, 14, 32); // Janeiro = 0
    const agora = new Date();

    let diferencaMs = agora - dataInicial;

    const segundosTotais = Math.floor(diferencaMs / 1000);
    const dias = Math.floor(segundosTotais / (60 * 60 * 24));

    const restanteSegundos = segundosTotais % (60 * 60 * 24);
    const horas = Math.floor(restanteSegundos / 3600);
    const minutos = Math.floor((restanteSegundos % 3600) / 60);
    const segundos = restanteSegundos % 60;

    const tempoFormatado = `${dias} dias, ` +
                           `${horas.toString().padStart(2, '0')} horas, ` +
                           `${minutos.toString().padStart(2, '0')} minutos, ` +
                           `${segundos.toString().padStart(2, '0')} segundos`;

    document.getElementById('academia-dias').textContent = tempoFormatado;
  }

  atualizarTempo();
  setInterval(atualizarTempo, 1000);
  
}

{
  function atualizarTempo() {
    const dataInicial = new Date(2023, 0, 7, 14, 32); // Janeiro = 0
    const agora = new Date();

    let diferencaMs = agora - dataInicial;

    const segundosTotais = Math.floor(diferencaMs / 1000);
    const dias = Math.floor(segundosTotais / (60 * 60 * 24));

    const restanteSegundos = segundosTotais % (60 * 60 * 24);
    const horas = Math.floor(restanteSegundos / 3600);
    const minutos = Math.floor((restanteSegundos % 3600) / 60);
    const segundos = restanteSegundos % 60;

    const tempoFormatado = `${dias} dias, ` +
                           `${horas.toString().padStart(2, '0')} horas, ` +
                           `${minutos.toString().padStart(2, '0')} minutos, ` +
                           `${segundos.toString().padStart(2, '0')} segundos`;

    document.getElementById('volta').textContent = tempoFormatado;
  }

  atualizarTempo();
  setInterval(atualizarTempo, 1000);
  
}