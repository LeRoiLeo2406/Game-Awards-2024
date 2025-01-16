// Initialisation de GSAP avec ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation des cartes
gsap.utils.toArray('.card').forEach((card) => {
  gsap.from(card, {
    opacity: 0, // Carte invisible au début
    y: 50, // Translation verticale (50px vers le bas)
    duration: 1, // Durée de l'animation (1 seconde)
    scrollTrigger: {
      trigger: card, // L'animation se déclenche lorsque la carte entre dans la vue
      start: 'top 80%', // Début de l'animation (80% du viewport)
      end: 'top 20%', // Fin de l'animation (20% du viewport)
      toggleActions: 'play none none reverse', // Animation jouée uniquement une fois
    },
  });
});

// Sélection de toutes les images avec la classe 'card-image'
const cardImages = document.querySelectorAll('.card-image');

// Ajout des événements pour chaque image
cardImages.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    // Crée un élément div pour le contour
    const borderEffect = document.createElement('div');
    borderEffect.classList.add('border-effect');

    // Ajoute l'élément dans l'image
    image.appendChild(borderEffect);

    // Animation avec GSAP
    gsap.fromTo(
      borderEffect,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power1.out" }
    );
  });

  image.addEventListener('mouseleave', () => {
    // Supprime l'effet de contour lorsqu'on quitte l'image
    const borderEffect = image.querySelector('.border-effect');
    if (borderEffect) {
      gsap.to(borderEffect, {
        opacity: 0,
        scale: 1.1,
        duration: 0.3,
        ease: "power1.in",
        onComplete: () => {
          borderEffect.remove(); // Supprime l'élément après l'animation
        },
      });
    }
  });
});
