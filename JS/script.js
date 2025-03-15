let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordInbox = 0;
let maxWordIndex = words.length - 1;
words[currentWordInbox].computedStyleMap.opacity = "1";

let changeTest = () => {
  let currentWord = words[currentWordInbox];
  let nextWord =
    currentWordInbox === maxWordIndex ? words[0] : words[currentWordInbox + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";

    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });

  currentWordInbox =
    currentWordInbox === maxWordIndex ? 0 : currentWordInbox + 1;
};

changeTest();
setInterval(changeTest, 3000);

//Skills section
const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i};--rot:${rotate}deg"></div>
`;
  }

  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});
//Active Menu
let menuli = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuli.forEach((sec) => sec.classList.remove("active"));
  menuli[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

//Sticky navbar

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

//toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick=()=>{
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
}

//Contact form mail
document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("hQpLRO6e3bibxO9ZU"); // Initialize EmailJS with Public Key

  document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.send("service_2icjckq", "template_9ygzojp", {
          from_name: document.getElementById("name").value,
          from_email: document.getElementById("email").value,
          phone_number: document.getElementById("phone").value,
          subject: document.getElementById("subject").value,
          message: document.getElementById("message").value
      }).then(
          (response) => {
              alert("Message sent successfully!");
              console.log("SUCCESS!", response.status, response.text);
              document.getElementById("contact-form").reset(); // Reset the form
          },
          (error) => {
              alert("Failed to send message. Please try again.");
              console.log("FAILED...", error);
          }
      );
  });
});





