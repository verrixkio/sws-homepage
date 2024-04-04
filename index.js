document.addEventListener("DOMContentLoaded", function() {
    
    const hamburger = document.querySelector(".hamburger");
    const closeBtn = document.querySelector(".close");
    const mobileMenu = document.querySelector(".mobile-menu");
    
    const header = document.getElementById("myHeader");
    
    if (window.location.pathname === '/') {
    header.style.display = 'none'; 
    } else {
    }

// MailTo Function Attached to Contact Us buttons that set an email.
    const contactButtons = document.querySelectorAll('.contactUs');  // Use class instead of ID

    contactButtons.forEach(function(contactButton) {
      contactButton.addEventListener('click', function() {
        const email = 'info@prototypedevshop.com';
        const subject = "I'd like some more information about your services.";
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
      });
    });


    let fading = false;
    let firstTime = true;
    
    const handleScroll2 = () => {
        if (firstTime) {
            if (!fading) {
            fading = true;
                if (window.scrollY > 1) {
                    header.style.display = "block";
                    header.style.position = 'fixed';
                    firstTime = false
                    let opacity = 0;
                    let intervalID = setInterval(() => {
                    if (opacity < 1) {
                        opacity += 0.1;
                        header.style.opacity = opacity;
                    } else {
                        clearInterval(intervalID);
                        fading = false;
                    }
                    }, 50);
                } else {
                    let opacity = 1;
                    let intervalID = setInterval(() => {
                    if (opacity > 0) {
                        opacity -= 0.1;
                        header.style.opacity = opacity;
                    } else {
                        header.style.display = "none";
                        clearInterval(intervalID);
                        fading = false;
                    }
                    }, 50);
                }
            }
        }
      };

    if (window.location.pathname === '/') {
    window.addEventListener("scroll", handleScroll2);
    header.style.opacity = "0";
    }

    // For hamburger menu
    hamburger.addEventListener("click", function() {
      mobileMenu.style.display = "flex";
      hamburger.style.display = "none";
      closeBtn.style.display = "block";
    });
  
    // For close button
    closeBtn.addEventListener("click", function() {
      mobileMenu.style.display = "none";
      hamburger.style.display = "block";
      closeBtn.style.display = "none";
    });
  
    // For initial state
    if (window.innerWidth < 992) {
      mobileMenu.style.display = "none";
      hamburger.style.display = "flex";
      closeBtn.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
      hamburger.style.display = "none";
      closeBtn.style.display = "none";
    }
});