const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme(){
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})










document.addEventListener('DOMContentLoaded', () => {
  const skillLevels = document.querySelectorAll('.skill-level');

  skillLevels.forEach(skillLevel => {
    const level = skillLevel.getAttribute('data-level');
    skillLevel.style.width = level;
  });
});










// .technologies__item {
//   position: relative; /* Needed for border gradient */
//   transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
// }

// .technologies__logo {
//   transition: transform 0.3s ease-in-out; /* Smooth logo size transition */
// }

// .technologies__item:hover {
//   transform: scale(1.08); /* Slight overall scale on hover */
//   box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Refined shadow on hover */
// }

// .technologies__item:hover .technologies__logo {
//   transform: scale(1.2); /* Increase logo size on hover */
// }

// /* Border Gradient on Hover */
// .technologies__item:hover::before {
//   content: '';
//   position: absolute;
//   top: -2px;
//   left: -2px;
//   right: -2px;
//   bottom: -2px;
//   background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
//   z-index: -1;
//   border-radius: 5px; /* Adjust if needed */
//   animation: gradientBorder 4s linear infinite;
// }

// @keyframes gradientBorder {
//   0% {
//       background-position: 0 0;
//   }
//   100% {
//       background-position: 400% 0;
//   }
// }










