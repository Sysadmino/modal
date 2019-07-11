$(document).ready(function() {
   //Модальное окно
   let btn = document.querySelector(".but_1");
   let filter = document.querySelector("#filter");
   let form = document.querySelector(".modalForm");	
	
   btn.addEventListener('click', function(){
	   filter.style.display = "block";
	   form.style.display = "block";
   });
	
	filter.addEventListener('click', function(){
	   filter.style.display = "none";
	   form.style.display = "none";
   })
  
});