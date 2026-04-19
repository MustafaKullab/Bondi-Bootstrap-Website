// Header Move
// Select The List
let ulList = document.querySelector(".header .links ul");

//Select The Toggle Icon
let toggleIcon = document.querySelector(".header .links .toggle");

//When Click On ToggleIcon
toggleIcon.addEventListener("click", (e) => {
  // Add Class active To The List
  ulList.classList.toggle("active");

  if (ulList.className === "active") {
    toggleIcon.style.cssText = "border: 1px solid #33d1c3;";
  } else {
    toggleIcon.style.cssText = "border: 1px solid white;";
  }
});

// Header Move
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
