const menuIcon = document.querySelector(".menu");
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener("click", () => {
	navbar.classList.toggle("change");
  });
  
  
/*document.getElementById('open').addEventListener('click',
function() {
  document.querySelector('.bg-model').style.display = 'flex';
});

document.getElementById('close').addEventListener('click',
function() {
  document.querySelector('.container').style.display = 'flex';
});*/
