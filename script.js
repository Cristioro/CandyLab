document.addEventListener("DOMContentLoaded", () => {
  // selecciona solo imágenes dentro de las tarjetas del equipo
  const imagenesEquipo = document.querySelectorAll("section.container img");

  imagenesEquipo.forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");

      if (src.includes("/equipo/") && !src.includes("/equipo-caja/")) {
        const nuevaRuta = src.replace("/equipo/", "/equipo-caja/");
        img.setAttribute("src", nuevaRuta);
      } 
      else if (src.includes("/equipo-caja/")) {
        const nuevaRuta = src.replace("/equipo-caja/", "/equipo/");
        img.setAttribute("src", nuevaRuta);
      }
    });
  });
});