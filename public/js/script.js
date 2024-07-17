'use strict';

window.addEventListener("DOMContentLoaded", (event) => {

  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");


  // contact form variables
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  //document.getElementsByClassName("place-name").innerHTML = "Miami Eye and Retina";
  
  // sidebar toggle functionality for mobile
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
  // custom select variables


  // element toggle function
  const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

  // add event to all form input field
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });
  }

  // add event to all nav link
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {

      for (let i = 0; i < pages.length; i++) {
        if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
          pages[i].classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      }

    });
  }
});


window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "AW-618975445");


window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-3M4H31MEGT");

{/* <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-WTTKGT83"
    height="0"
    width="0"
    style="display: none; visibility: hidden"></iframe>
</noscript> */}

