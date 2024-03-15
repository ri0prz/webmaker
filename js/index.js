// Navlist animation when clicked.
const rightNav = document.querySelector(".right-nav");
const leftNav = document.querySelector(".left-nav");
const navlists = document.querySelectorAll(".right-nav a.slider");
const navs = [
   {
      target: document.querySelector(".nav-home"),
      direct: "#home"
   },
   {
      target: document.querySelector(".nav-demos"),
      direct: "#demos"
   },
   {
      target: document.querySelector(".nav-feature"),
      direct: "#feature"
   }
]

rightNav.onclick = (e) => {
   // Identify clicked element.
   const target = e.target;
   if (target.matches("a.default-list")) {
      for (const navlist of navlists) {
         navlist.setAttribute("class", "default-list");
      }

      // Set that clicked element target.
      target.setAttribute("class", "clicked-list");
   }
};

for (const nav of navs) {
   const {target, direct} = nav;
   target.onclick = () => { window.location.href = direct }
}

// Autospy navbar.
const sections = document.querySelectorAll("section");
window.onscroll = () => {
   let top = window.scrollY;
   for (const section of sections) {
      const offsetTop = section.offsetTop;
      const height = section.offsetHeight;
      const offsetBottom = offsetTop + height;
      const navTarget = section.getAttribute("anchor");  
      
      // Detect y-pos.
      if (top > offsetTop && top < offsetBottom) {
         for (const navlist of navlists) {
            navlist.setAttribute("class", "default-list");
         }
         
         // Set that clicked element target.
         let target = document.querySelector(`#${navTarget}`);         
         target.setAttribute("class", "clicked-list");
      }
   }
}

// Nav icon for mini tab.
const navButtons = [document.getElementById('nav-bar'), document.getElementById('nav-bar-out')];
for (const navButton of navButtons) {
   navButton.onclick = () => {
      navButtons[0].classList.toggle('active');
      rightNav.classList.toggle('active');
      leftNav.classList.toggle('active');
   }
}

// Main button clicked.
const pages = [
   { doc: document.getElementById("home-button"), link: "#about" },
   { doc: document.getElementById("logo"), link: "#home" },
   { doc: document.getElementById("about-button"), link: "#demos" },
   { doc: document.querySelector("#demos-button.demos-next-button"), link: "#feature" }   
];

const directButtons = [
   { doc: document.getElementById("feature-button"), link: "html/contact.html" },
   { doc: document.querySelector("#developer-button"), link: "./html/developer.html" },
   { doc: document.querySelector(".nav-request"), link: "html/request.html" }
];

for (const directButton of directButtons) {
   const { doc, link } = directButton;
   doc.onclick = () => {
      fadeEffect();
      setTimeout(() => {
         window.open(link, "_self");
      }, 800);
   };
}

// Auto nav page detection.
for (const page of pages) {
   const { doc, link } = page;

   // Get url.
   doc.onclick = () => {
      window.location.href = link;
   };
}

// Service page management
const description = [
   { plus: "simple", image: "./images/feature-simple.png" },
   { plus: "interactive", image: "./images/feature-interactive.png" },
   { plus: "amusing", image: "./images/feature-amusing.png" },
];
const featureDescriptionBox = document.getElementById(
   "feature-description-box"
);
const featureDescription = document.getElementById("feature-description");
const featureImage = document.getElementById("feature-image");

// Display each description every specific time.
let index = 0;
setInterval(() => {
   const max = description.length - 1;
   const display = description[index];

   featureImage.src = display.image;
   featureDescription.textContent = display.plus;
   fadeAnimation();

   // Prevent undefined value
   index++;
   if (index > max) index = 0;
}, 2000);

// Demo image slider modification
const demoSliderButton = document.getElementById("demo-slider-button");
const demoImages = document.querySelectorAll("#demos .demo-image");
const demoGrowButton = document.getElementById("demo-grow-effect");
const demoDescription = document.getElementById("demo-description");
const demoImageTitle = document.getElementById("demo-image-description-title");
const demoImageDesc = document.getElementById("demo-image-description-desc");
const demoImageContainer = document.getElementById("demo-image-description");
const demoDescriptionList = [
   {
      type: "minimalist",
      desc: "simple design that brings full scenery of quality.",
   },
   {
      type: "modern",
      desc: "new dated style that popular these days.",
   },
   {
      type: "structured",
      desc: "recommended for those who likely go neat and tidy functionality.",
   },
];

// Slide image and desc while do click or auto with certain interval.
let aboutImageIndex = 0;
setInterval(() => {
   aboutContentUpdate();
}, 10000);
demoSliderButton.onclick = () => {
   // Demo button clicked.
   demoGrowButton.classList.add("active");
   setTimeout(() => {
      demoGrowButton.classList.remove("active");
   }, 500);
   aboutContentUpdate();
};

// Functions
function aboutContentUpdate() {
   aboutImageIndex++;
   const limit = demoImages.length - 1;
   if (aboutImageIndex > limit) aboutImageIndex = 0;

   // Demo description animation
   demoDescription.classList.add("invisible-effect");
   demoImageContainer.classList.add("invisible-effect");
   setTimeout(() => {
      demoDescription.classList.remove("invisible-effect");
      demoImageContainer.classList.remove("invisible-effect");

      // Set updated element.
      for (const demoImage of demoImages) {
         demoImage.style.setProperty(
            "--demo-image-index",
            `${aboutImageIndex}`
         );
      }
      const title = demoDescriptionList[aboutImageIndex].type;
      const description = demoDescriptionList[aboutImageIndex].desc;

      demoDescription.textContent = title;
      demoImageTitle.textContent = title;
      demoImageDesc.textContent = description;
   }, 500);
}

function fadeAnimation() {
   featureDescriptionBox.setAttribute("class", "fade");
   setTimeout(() => {
      featureDescriptionBox.setAttribute("class", "after-fade");
   }, 100);
}