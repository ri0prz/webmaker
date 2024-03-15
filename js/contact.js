// Initialize content.
const contactForm = document.querySelector('#contact-get-in-touch');
const waForm = document.querySelector('#contact-whatsapp');
const emailForm = document.querySelector('#contact-email');

// Back button set up.
const transition = document.getElementById('contact-transition');
const backButtons = document.querySelectorAll('#contact-back');
const backContents = [ waForm, emailForm ];
for (const backButton of backButtons) {
   backButton.onclick = () => {
      backToContact();
   }
}

// Button provider.
const provideButtons = [
   { doc: document.getElementById('whatsapp'), provide: waForm },
   { doc: document.getElementById('email'), provide: emailForm }
]
for (const provider of provideButtons) {
   const doc = provider.doc;
   const provide = provider.provide;

   // Button director.
   doc.onclick = () => {
      backToContact(provide);
   }
}

// Button to landpage.
const leftButton = document.getElementById('contact-left');
leftButton.onclick = () => {
   fadeEffect();
   setTimeout(() => { window.open("../index.html", "_self"); }, 600);   
}

// Button url director.
const contactDirections = [ 
   { link: "https://wa.me/6289513005897", button: document.querySelector("[into = WhatsApp]") }, 
   { link: "mailto:ergarrios2003@gmail.com?subject=Web%20Request", button: document.querySelector("[into = Email]") } 
];

for (const direct of contactDirections) {
   // Get each object property
   const button = direct.button;
   const url = direct.link;   
   button.onclick = () => { 
      const state = confirm(`You will be directed into: ${url}.`)
      if (state) window.open(url, "_blank");       
   }
}

// Functions.
function backToContact(id) {  
   const add = id || false;   

   // If has parameter.
   if (add) {      
      transition.classList.add('active');
      setTimeout(() => { 
         add.style.display = "block";
         contactForm.style.display = "none"; 
         transition.classList.remove('active'); 
      }, 2000 );
      return;
   }

   transition.classList.add('active');
   setTimeout(() => { 
      contactForm.style.display = "block";
      for (const backContent of backContents) { backContent.style.display = "none"; }
      transition.classList.remove('active'); 
   }, 1500 );
}