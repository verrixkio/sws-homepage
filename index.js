document.addEventListener("DOMContentLoaded", function() {
    
    const hamburger = document.querySelector(".hamburger");
    const closeBtn = document.querySelector(".close");
    const mobileMenu = document.querySelector(".mobile-menu");
    
    const header = document.getElementById("myHeader");
    
    if (window.location.pathname === '/') {
    header.style.display = 'none'; 
    } else {
    }

const waitlistButtons = document.querySelectorAll('.waitlist');  // Use class instead of ID

    waitlistButtons.forEach(function(waitlistButton) {
        waitlistButton.addEventListener('click', function() {
            const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe3MYd9AB-ldZOuttdLRIAmW1Mjuya7fwdFC7YcD4QF4p4IWA/viewform?usp=sf_link";
            window.open(formUrl, '_blank');  // Opens the link in a new window
        });
    });

// Select all contact buttons
const contactButtons = document.querySelectorAll('.requestInfo');

// Function to handle click event
function handleContactButtonClick(event) {
  // Prevent default behavior
  event.preventDefault();
  
  // Email address and subject
  const email = 'contact@startwithself.io';
  const subject = "INFO";
  
  // Check if the device supports mailto links
  if (navigator && navigator.share) {
    // If supported, use navigator.share to open email client
    navigator.share({
      title: 'Contact Start with Self',
      text: subject,
      url: `mailto:${email}?subject=${encodeURIComponent(subject)}`
    })
    .catch(error => {
      // Handle error, e.g., fallback to manual email composition
      console.error('Error sharing:', error);
      fallbackToManualEmail(email, subject);
    });
  } else {
    // If not supported, fallback to manual email composition
    fallbackToManualEmail(email, subject);
  }
}

// Function to fallback to manual email composition
function fallbackToManualEmail(email, subject) {
  // Display a message with instructions for manual email composition
  alert(`Please compose an email to ${email} with the subject: "${subject}"`);
}

// Attach click event listeners to all contact buttons
contactButtons.forEach(contactButton => {
  contactButton.addEventListener('click', handleContactButtonClick);
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