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

//--pre tag logo refreshed page --

// $(document).ready(function(){
//   $(".logo").click(function(){
//     location.reload(true)
//   })
// })


// --- fade in functions --- 

// $(document).ready(function(){
//     $(".contact-fade").click(function(){
//       $(".work-links").fadeIn(3000);
//     });
//   });

//--about--

  $(document).ready(function(){
    $(".about").click(function(){
      $('#about').fadeIn(4000);
    });
  });

  $(document).ready(function(){
    $(".about").click(function(){
      $("#dot").fadeIn(6000);
    });
  });

  $(document).ready(function(){
    $(".about").click(function(){
      $('#about2').fadeIn(12000);
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