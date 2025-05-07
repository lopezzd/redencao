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

    function atualizarDias() {
      const dataInicial = new Date(2022, 6, 1); // Julho = 6
      const dataAtual = new Date();
      const diferencaMs = dataAtual - dataInicial;
      const diasPassados = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));
      document.getElementById('dias-passados').textContent = diasPassados;
    }

    // Função para atualizar o relógio
    function atualizarRelogio() {
      const agora = new Date();
      let horas = agora.getHours();
      let minutos = agora.getMinutes();
      let segundos = agora.getSeconds();

      // Adicionar zero à esquerda se necessário
      horas = horas < 10 ? '0' + horas : horas;
      minutos = minutos < 10 ? '0' + minutos : minutos;
      segundos = segundos < 10 ? '0' + segundos : segundos;

      const horarioFormatado = `${horas}:${minutos}:${segundos}`;
      document.getElementById('pelegrinos-hora').textContent = horarioFormatado;
    }

    // Inicializar os valores
    atualizarDias();
    atualizarRelogio();

    // Atualizar o relógio a cada segundo
    setInterval(atualizarRelogio, 1000);
    
