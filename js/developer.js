const leftButton = document.getElementById('developer-left');
leftButton.onclick = () => {
   fadeEffect();
   setTimeout(() => { window.open('../index.html', '_self') }, 800);
}