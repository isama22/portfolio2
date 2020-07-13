console.log('hello! im working!')

// --- smooth scrolling --

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- fade in functions --- 

$(document).ready(function(){
    $(".contact").click(function(){
      $(".work-links").fadeIn(3000);
    });
  });

//--about--
  $(document).ready(function(){
    $(".about").click(function(){
      $("#about").fadeIn(2000);
    });
  });

//--skills section--
$(document).ready(function(){
    $(".skill").click(function(){
      $("#show-skills").fadeIn(2000);
    });
  });

//--projects div ---

$(document).ready(function(){
    $(".projects").click(function(){
      $(".project-content").fadeIn(2000);
    });
  });