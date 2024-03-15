const webmaker = document.getElementById('webmaker-transition');
document.querySelector('body').style.overflow = 'hidden';

setTimeout(() => {
   window.scrollTo(0, 0);
   webmaker.classList.add('active');   
   document.querySelector('body').style.overflowY = 'visible';
}, 2200);

const webFade = document.getElementById('webmaker-fade-transition');
const fadeEffect = () => {
   webFade.classList.add('active');
   setTimeout(() => { 
      webFade.classList.remove('active'); 
      document.querySelector('body').style.overflowY = 'visible';
   }, 800);
}
fadeEffect();

// Sparkle effect on magic font.
function makeStar(effect, setIcon) {
   const icon = `${setIcon}`;
   const node = document.createElement("span");
   node.insertAdjacentHTML(`afterbegin`, icon);
   node.setAttribute("class", "magic-star");
   effect.appendChild(node);
}

function animate(star) {
   star.style.setProperty("--magic-star-y", `${randomizer(0, 80)}%`);
   star.style.setProperty("--magic-star-x", `${randomizer(20, 100)}%`);

   star.style.animation = "none";
   star.style.animation = "";
}

function randomAtZero(max) {
   return Math.round(Math.random() * max);
}

function randomizer(min, max) {
   return Math.round(Math.random() * (max - min + 1) + min);
}

const magicEffect = document.querySelectorAll(".magic-effect");

for (const effect of magicEffect) {
   // Identify icon effect.
   const icon = effect.getAttribute("magic-icon");

   // Set max effect then add.
   const maxStar = 1;
   for (let i = 0; i < maxStar; i++) {
      makeStar(effect, icon);
   }

   // Animate those magic sparkles.
   const targetStar = document.querySelectorAll(".magic-star");
   for (const star of targetStar) {
      setInterval(() => animate(star), 1000);
   }
}

// console.log(webFade);