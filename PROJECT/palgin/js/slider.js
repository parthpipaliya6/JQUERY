// benner slider js start

let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

// Function to show a specific slide
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark its corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to advance to the next slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Function to navigate to a specific slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Automatically advance to the next slide every 3 seconds (3000 milliseconds)
setInterval(function () {
  plusSlides(1);
}, 5000);

// Initialize the slider
showSlides(slideIndex);


// benner slider js end 
// =================================================================================================================================================
// section one start
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".card-slider-main");
  const leftButton = document.querySelector(".arrow-left");
  const rightButton = document.querySelector(".arrow-right");

  function updateButtonState() {
    leftButton.disabled = container.scrollLeft <= 0;
    rightButton.disabled =
      container.scrollLeft + container.offsetWidth >= container.scrollWidth;
  }

  leftButton.addEventListener("click", function () {
    container.scrollBy({
      left: -container.offsetWidth / 2,
      behavior: "smooth",
    });
  });

  rightButton.addEventListener("click", function () {
    container.scrollBy({ left: container.offsetWidth / 2, behavior: "smooth" });
  });
  container.addEventListener("scroll", updateButtonState);
  updateButtonState();
});
// section one end 
// ==============================================================================================================================================
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
//================================================================================================================================================== 

$(document).ready(function() {
  $("#newsletterForm").submit(function(e) {
      e.preventDefault();
      const email = $("#emailInput").val();
      // You can add your own logic here (e.g., send the email to a server).
      console.log("Email submitted:", email);
  });
});

// ===================================================================================================================================================
document.querySelector(".search-btn").addEventListener("click", ()=>{

  search = document.querySelector(".search").value

         if(search%2==0){ console.log("⚠️Warning: This search engine is not connected to the website ❗️")
                          alert("⚠️  This search engine is not connected to the website ❗️") 
         }
         if(search%2===1){ console.log("⚠️Warning: This search engine is not connected to the website ❗")
                           alert("⚠️  This search engine is not connected to the website ❗️") 
         }

//   +++ Qidiruv tarixiga qo'shilgan web saytlar +++

// ===Qisqartirilmagan holat===

        else if(search==='kun.uz'){ location = "https://kun.uz/"

        }

        else if(search==='youtube.com'){ location = "https://www.youtube.com/"

        }

        else if(search==='telegram.org'){ location = "https://web.telegram.org/a/"

        }

        else if(search==='canva.com'){ location = "https://canva.com/"

        }

        else if(search==='fontawesome.com'){ location = "https://fontawesome.com/"

        }

        else if(search==='discord.com'){ location = "https://discord.com/"

        }

        else if(search==='panzoid.com'){ location = "https://panzoid.com/"

        }

        else if(search==='upg.uz'){ location = "https://upg.uz/"

        }

        else if(search==='youtube.channel/TOMS LIDER'){ location = "https://www.youtube.com/@TOMS_LIDER"

        }

        else if(search==='live server'){ location = "http://127.0.0.1:5500/"

        }

// ===Finsh===

// ---Qisqartirilgan holat---

        else if(search==='kun'){ location = "https://kun.uz/"

        }

        else if(search==='yt'){ location = "https://www.youtube.com/"

        }

        else if(search==='tg'){ location = "https://web.telegram.org/a/"

        }

        else if(search==='cv'){ location = "https://canva.com/"

        }

        else if(search==='fa'){ location = "https://fontawesome.com/"

        }

        else if(search==='dd'){ location = "https://discord.com/"

        }

        else if(search==='pd'){ location = "https://panzoid.com/"

        }

        else if(search==='upg'){ location = "https://upg.uz/"

        }

        else if(search==='yt.TL'){ location = "https://www.youtube.com/@TOMS_LIDER"

        }

        else if(search==='ls'){ location = "http://127.0.0.1:5500/"

        }

// ---Finsh---
// +++ Finsh all URL +++
document.querySelector(".search").value = ""

})
//=================================================================================================================================================
