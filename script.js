document.addEventListener('DOMContentLoaded', function() {
  // 1. Efeito de Digitação no Título
  const typingElement = document.querySelector('.typing');
  const words = ['Reivison', 'um programador', 'um criador', 'um desenvolvedor'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    
    typingElement.textContent = currentChar;
    
    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(type, 1000);
    }
  }

  setTimeout(type, 1000);

  // 2. Atualizar ano no footer automaticamente
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // 3. Configuração do Efeito de Partículas
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#00b8ff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00b8ff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      }
    }
  });

  // 4. Sistema de Tema Claro/Escuro (modo escuro padrão)
  const themeToggle = document.getElementById('theme-toggle');

  function setTheme(isDark) {
    if (isDark) {
      document.body.classList.remove('light-theme');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      document.body.classList.add('light-theme');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  // Forçar modo escuro ao carregar
  setTheme(true);

  // Alternar tema ao clicar
  themeToggle.addEventListener('click', () => {
    const isCurrentlyLight = document.body.classList.contains('light-theme');
    setTheme(isCurrentlyLight);
  });

  // 5. Efeito de Confete ao Clicar na Foto
  function createConfetti() {
    const colors = ['#00b8ff', '#ff00aa', '#ffcc00', '#00ff88', '#8800ff'];
    
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      confetti.style.width = `${Math.random() * 10 + 5}px`;
      confetti.style.height = confetti.style.width;
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  }

  document.querySelector('.profile-pic').addEventListener('click', createConfetti);
});