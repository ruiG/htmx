// this is client side
import confetti from 'canvas-confetti';

document.getElementById('target').addEventListener('click', () => {
    setTimeout(() => {
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.8 },
          disableForReducedMotion: true,
        });
      }, 500);
})