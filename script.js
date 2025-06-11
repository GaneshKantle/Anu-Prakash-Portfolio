
// Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Sticky Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation for Elements
const fadeElements = document.querySelectorAll('.fade-in');

const fadeIn = () => {
    fadeElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('active');
        }
    });
};

// Skill Progress Animation
const skillProgress = () => {
    const skillSection = document.querySelector('#skills');
    const skillPosition = skillSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (skillPosition < screenPosition) {
        document.querySelector('.html-progress').style.width = '90%';
        document.querySelector('.css-progress').style.width = '85%';
        document.querySelector('.js-progress').style.width = '80%';
        document.querySelector('.react-progress').style.width = '75%';
        document.querySelector('.node-progress').style.width = '70%';
        document.querySelector('.express-progress').style.width = '65%';
        document.querySelector('.mongo-progress').style.width = '60%';
        document.querySelector('.mysql-progress').style.width = '65%';
        document.querySelector('.git-progress').style.width = '80%';
        document.querySelector('.figma-progress').style.width = '70%';
        document.querySelector('.vscode-progress').style.width = '85%';
        document.querySelector('.responsive-progress').style.width = '85%';
    }
};

// Contact Form Validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (name && email && subject && message) {
            // In a real scenario, you would send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}



function sendMail() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      const subject = encodeURIComponent("Message from " + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      window.location.href = `mailto:anuprakashh599@gmail.com?subject=${subject}&body=${body}`;
    } else {
      alert("Please fill in all fields.");
    }
  }

  function sendWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      const phoneNumber = "917204338812"; // Replace with your WhatsApp number (without '+' sign)
      const text = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    } else {
      alert("Please fill in all fields.");
    }
  }


// Run animations when page loads and on scroll
window.addEventListener('load', () => {
    fadeIn();
    skillProgress();
});

window.addEventListener('scroll', () => {
    fadeIn();
    skillProgress();
});

// Preloader (optional)
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

//send message>
  function sendMail() {
    window.location.href = "mailto:anuprakashh599@gmail.com";
  }

