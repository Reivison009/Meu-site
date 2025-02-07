document.addEventListener("DOMContentLoaded", () => {
  const text = "Reivison";
  const typingElement = document.querySelector(".typing");
  const cursorElement = document.querySelector(".cursor");
  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!isDeleting && index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 190);
    } else if (isDeleting && index >= 0) {
      typingElement.innerHTML = text.substring(0, index);
      index--;
      setTimeout(typeEffect, 100);
    }

    if (index === text.length) {
      setTimeout(() => (isDeleting = true), 1500);
    } else if (index === 0 && isDeleting) {
      isDeleting = false;
      setTimeout(typeEffect, 500);
    }
  }

  typeEffect();
});
