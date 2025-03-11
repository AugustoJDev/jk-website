// Carrossel com Swiper.js
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o Swiper
    const swiper = new Swiper('.main-carousel', {
      // Configurações básicas
      speed: 800,
      effect: 'slide',         // Alterado de 'fade' para 'slide' (padrão)
      slidesPerView: 1,        // Mostra uma imagem por vez
      spaceBetween: 0,         // Sem espaço entre slides
      direction: 'horizontal', // Movimento horizontal (padrão)
      
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      
      // Configuração de transição para slide da direita para esquerda
      on: {
        init: function() {
          const slides = document.querySelectorAll('.swiper-slide');
          slides.forEach(slide => {
            // Define a posição inicial do slide
            slide.style.backgroundSize = 'cover';
            slide.style.backgroundPosition = 'center';
          });
        }
      }
    });
  });