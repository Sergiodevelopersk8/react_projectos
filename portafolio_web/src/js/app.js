
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  let flag = false;

  toggle.addEventListener("click", () => {
    if(!flag){
      toggle.classList.toggle("active");
      menu.classList.toggle("show");
      toggle.classList.add('close_menu');
      toggle.classList.remove('menu_icon');
      flag = true;
    }
    
    else  if(flag){
      flag = false;
      toggle.classList.remove('close_menu');
      toggle.classList.add('menu_icon');
      menu.classList.remove("show");
      toggle.classList.remove("active");
    }
    
  });
  
  // Cerrar menú 
  document.querySelectorAll(".nav__links a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
      toggle.classList.remove("active");
      toggle.classList.remove('close_menu');
      toggle.classList.add('menu_icon');
    });
  });
  
  
  
  
 


