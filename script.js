document.addEventListener("DOMContentLoaded", function () {

    const oscarInfo = {
      Pelicula: {
        title: "Mejor Película - Anora",
        text: "La película 'Anora' dirigida por Sean Baker fue la gran ganadora de la noche, llevándose 5 premios incluyendo Mejor Película y Mejor Dirección. La historia cautivó a la crítica por su realismo y poderosa narrativa."
      },
      Actor: {
        title: "Mejor Actor Principal - Sean Baker",
        text: "Sean Baker sorprendió con su actuación en 'The Brutalist', obteniendo su primer Óscar. Su interpretación intensa y profunda fue clave para su reconocimiento por la Academia."
      },
      Actriz: {
        title: "Mejor Actriz Principal - Mikey Madison",
        text: "Mikey Madison recibió su primer Óscar por su papel en 'Anora'. Su actuación fue elogiada por la crítica y considerada una de las mejores del año."
      },
      P_Inter: {
        title: "Mejor Película Internacional - Aún Estoy Aquí",
        text: "La película brasileña 'Aún estoy aquí' conquistó el premio a Mejor Película Internacional con su impactante historia sobre la resiliencia y la identidad."
      },
      Flow: {
        title: "Mejor Película de Animación - Flow",
        text: "'Flow' se destacó en la categoría de animación con su innovador estilo artístico y una historia emotiva que conectó con audiencias de todas las edades."
      },
      Robot: {
        title: "Mejor Corto de Acción - I'm Not a Robot",
        text: "El corto 'I'm Not a Robot' impresionó con su mensaje profundo sobre la inteligencia artificial y la humanidad, llevándose el premio en esta categoría."
      }
    };
  
    const modal = document.getElementById("infoModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const closeModal = document.querySelector(".close");
  
    function openModal(category) {
      if (oscarInfo[category]) {
        modalTitle.textContent = oscarInfo[category].title;
        modalText.textContent = oscarInfo[category].text;
        modal.style.display = "flex";
      }
    }
  
    document.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", function () {
        openModal(this.id);
      });
    });

    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  
