setTimeout(() => {
  const getImage = document.querySelectorAll(".game");
  getImage.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("new-size");
      const wrapperImg = document.querySelector(".wrapper-img");
      const img = wrapperImg.querySelector("img");
      wrapperImg.classList.toggle("wrapper-img-show");
      img.src = element.src;
    });
  });
}, 100);
